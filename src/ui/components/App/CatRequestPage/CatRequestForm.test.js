import { shallow } from "enzyme";
import nock from "nock";
import CatRequestForm from "./CatRequestForm";
import EmailField from "./CatRequestForm/EmailField";
import GenderField from "./CatRequestForm/GenderField";
import BreedField from "./CatRequestForm/BreedField";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

let catRequestForm;

beforeEach(() => {
  catRequestForm = shallow(<CatRequestForm />);
});

describe("submit button", () => {
  describe("active submit button", () => {
    it("should has active submit button if filters are empty and email is filled", () => {
      // when
      userFillsFormWith({
        catBreed: "",
        catGender: "",
        userEmail: "user@company.org",
      });

      // then
      expect(catRequestForm.find("button").prop("disabled")).toBeFalsy();
    });

    it("should has active submit button if filters and email are filled", () => {
      // when
      userFillsFormWith({
        catBreed: "dog",
        catGender: "MALE",
        userEmail: "user@company.org",
      });

      // then
      expect(catRequestForm.find("button").prop("disabled")).toBeFalsy();
    });

    it("should has active submit button if only gender and email are filled", () => {
      // when
      userFillsFormWith({
        catBreed: "",
        catGender: "MALE",
        userEmail: "user@company.org",
      });

      // then
      expect(catRequestForm.find("button").prop("disabled")).toBeFalsy();
    });
  });

  describe("inactive submit button", () => {
    it("should has inactive submit button if all fields are empty", () => {
      // when
      userFillsFormWith({
        catBreed: "",
        catGender: "",
        userEmail: "",
      });

      // then
      expect(catRequestForm.find("button").prop("disabled")).toBeTruthy();
    });

    it("should has inactive submit button if email is empty and filters are filled", () => {
      // when
      userFillsFormWith({
        catBreed: "dog",
        catGender: "MALE",
        userEmail: "",
      });

      // then
      expect(catRequestForm.find("button").prop("disabled")).toBeTruthy();
    });
  });

  describe("interaction with breed field", () => {
    it("should has inactive submit button if breed field is invalid and email is filled", () => {
      // when
      catRequestForm.find(BreedField).prop("onBreedChange")({
        breed: "dog",
        isValid: false,
      });
      catRequestForm.find(EmailField).prop("onEmailChange")("user@company.org");

      // then
      expect(catRequestForm.find("button").prop("disabled")).toBeTruthy();
    });

    it("should has inactive submit button if breed field is valid and email is not filled", () => {
      // when
      userFillsFormWith({
        catBreed: "dog",
        catGender: "",
        userEmail: "",
      });

      // then
      expect(catRequestForm.find("button").prop("disabled")).toBeTruthy();
    });
  });
});

describe("form submission", () => {
  it("should send empty cat filter if filter fields are not filled", () => {
    // given
    const someApiServer = nock("http://localhost:3000")
      .post("/api/cats/requests", {
        catBreed: null,
        catGender: null,
        userEmail: "user@company.org",
      })
      .reply(200);

    // when
    catRequestForm.find(EmailField).prop("onEmailChange")("user@company.org");

    // and
    catRequestForm.find("button").simulate("click");

    // then
    expect(someApiServer.isDone()).toBeTruthy();
  });
});

function userFillsFormWith({ catBreed, catGender, userEmail }) {
  catRequestForm.find(BreedField).prop("onBreedChange")({
    breed: catBreed,
    isValid: true,
  });
  catRequestForm.find(GenderField).prop("onGenderChange")(catGender);
  catRequestForm.find(EmailField).prop("onEmailChange")(userEmail);
}
