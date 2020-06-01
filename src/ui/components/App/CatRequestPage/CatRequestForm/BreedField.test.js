import { shallow } from "enzyme";
import BreedField, { breedIsValid } from "./BreedField";

describe("breed validation", () => {
  it("should pass cyrillic breed", () => {
    expect(breedIsValid("бенгал")).toBeTruthy();
  });

  it("should not pass latin breed", () => {
    expect(breedIsValid("bengal")).toBeFalsy();
  });

  it("should not pass numeric breed", () => {
    expect(breedIsValid("1234")).toBeFalsy();
  });
});

describe("field validation visuals", () => {
  it("should make text field red on non-cyrillic input", () => {
    // given
    const component = shallow(<BreedField onBreedChange={jest.fn()} />);

    // when
    component.find("input").simulate("change", { target: { value: "hi" } });

    // then
    expect(component.find("input").hasClass("is-danger")).toBeTruthy();
  });

  it("should not make text field red on cyrillic input", () => {
    // given
    const component = shallow(<BreedField onBreedChange={jest.fn()} />);

    // when
    component.find("input").simulate("change", { target: { value: "привет" } });

    // then
    expect(component.find("input").hasClass("is-danger")).toBeFalsy();
  });
});
