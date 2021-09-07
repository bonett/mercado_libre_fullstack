import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LogoComponent from "./logo";
import { Button } from "./logo.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For LogoComponent", () => {
  it("should render content for LogoComponent", () => {
    const props = { logoClicked: () => {} };
    const wrapper = shallow(<LogoComponent {...props} />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should redirect to home when logo is clicked", () => {
    const props = { logoClicked: () => jest.fn() };
    const wrapper = shallow(<LogoComponent {...props} />);
    wrapper.find(Button).simulate("click");
    expect(props.logoClicked.length).toEqual(0);
  });
});
