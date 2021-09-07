import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SkeletonComponent from "./loader";
import { LoaderContent, LoaderWrapper } from "./loader.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For LoaderComponent", () => {
  it("should render content for LoaderComponent", () => {
    const props = { screen: "DETAIL" };
    const wrapper = shallow(<SkeletonComponent {...props} />);
    expect(wrapper.find(LoaderContent)).toHaveLength(1);
    expect(wrapper.find(LoaderWrapper)).toHaveLength(1);
  });

  it("should render content for LoaderComponent", () => {
    const props = { screen: "LIST" };
    const wrapper = shallow(<SkeletonComponent {...props} />);
    expect(wrapper.find(LoaderContent)).toHaveLength(1);
    expect(wrapper.find(LoaderWrapper)).toHaveLength(4);
  });
});
