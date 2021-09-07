import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavbarComponent from "./navbar";
import {
  Navbar,
  NavbarContent,
  LogoWrapper,
  FormWrapper,
} from "./navbar.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For NavbarComponent", () => {
  it("should render content for NavbarComponent", () => {
    const props = {
      redirectToHome: () => {},
      query: "",
      handleInputSearch: () => {},
      handleSearchButton: () => {},
    };
    const wrapper = shallow(<NavbarComponent {...props} />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(NavbarContent)).toHaveLength(1);
    expect(wrapper.find(LogoWrapper)).toHaveLength(1);
    expect(wrapper.find(FormWrapper)).toHaveLength(1);
  });
});
