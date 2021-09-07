import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TextFieldComponent from "./textField";
import { TextFieldWrapper, TextField, Button } from "./textField.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For TextFieldComponent", () => {
  it("should render content for TextFieldComponent", () => {
    const props = {
      query: "",
      handleInputSearch: () => {},
    };
    const wrapper = shallow(<TextFieldComponent {...props} />);
    expect(wrapper.find(TextFieldWrapper)).toHaveLength(1);
    expect(wrapper.find(TextField)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
