import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomeComponent from "./home";
import { HomeSection } from "./home.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For HomeComponent", () => {
  it("should not render content for HomeComponent", () => {
    const props = {
      query: "query",
      history: {},
      setQuerySearch: () => {},
    };
    const wrapper = shallow(<HomeComponent {...props} />);
    expect(wrapper.find(HomeSection)).toHaveLength(0);
  });
});
