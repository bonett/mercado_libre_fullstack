import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BreadcrumbComponent from "./breadcrumb";
import {
  BreadcrumbContent,
  BreadcrumbItem,
  BreadcrumbList,
} from "./breadcrumb.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For BreadcrumbComponent", () => {
  it("should render content for BreadcrumbComponent", () => {
    const wrapper = shallow(<BreadcrumbComponent />);
    expect(wrapper.find(BreadcrumbContent)).toHaveLength(1);
    expect(wrapper.find(BreadcrumbList)).toHaveLength(1);
    expect(wrapper.find(BreadcrumbItem)).toHaveLength(0);
  });

  it("should render content for BreadcrumbComponent", () => {
    const props = { breadcrumbCategories: ["mac"] };
    const wrapper = shallow(<BreadcrumbComponent {...props} />);
    expect(wrapper.find(BreadcrumbContent)).toHaveLength(1);
    expect(wrapper.find(BreadcrumbList)).toHaveLength(1);
    expect(wrapper.find(BreadcrumbItem)).toHaveLength(1);
  });

  it("should render breadcrumb more than 2 for BreadcrumbComponent", () => {
    const props = { breadcrumbCategories: ["mac", "pc", "pro 16"] };
    const wrapper = shallow(<BreadcrumbComponent {...props} />);
    expect(wrapper.find(BreadcrumbContent)).toHaveLength(1);
    expect(wrapper.find(BreadcrumbList)).toHaveLength(1);
    expect(wrapper.find(BreadcrumbItem)).toHaveLength(3);
  });
});
