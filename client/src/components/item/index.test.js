import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemComponent from "./item";
import { BreadcrumbWrapper, ItemSection, ListWrapper } from "./item.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For ItemComponent", () => {
  it("should not render content ItemComponent", () => {
    const props = {
      status: "LOADED",
      itemListFetch: () => {},
      categories: [],
      items: [],
      history: {
        params: "i",
      },
      location: {
        search: "ipad",
      },
      setItemSelected: "M212312",
    };
    const wrapper = shallow(<ItemComponent {...props} />);
    expect(wrapper.find(BreadcrumbWrapper)).toHaveLength(0);
    expect(wrapper.find(ItemSection)).toHaveLength(0);
    expect(wrapper.find(ListWrapper)).toHaveLength(0);
  });
});
