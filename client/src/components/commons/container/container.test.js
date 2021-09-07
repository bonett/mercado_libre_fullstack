import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ContainerComponent from "./container";
import { Container } from "./container.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For ContainerComponent", () => {
  it("should render content for ContainerComponent", () => {
    const wrapper = shallow(<ContainerComponent />);
    expect(wrapper.find(Container)).toHaveLength(1);
  });
});
