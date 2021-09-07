import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ItemDetailComponent from "./itemDetail";
import { ItemDetailSection } from "./itemDetail.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For ItemDetailComponent", () => {
  it("should render content for ItemDetailComponent", () => {
    const props = {
      query: "query",
      history: {},
      setQuerySearch: () => {},
    };
    const wrapper = shallow(<ItemDetailComponent {...props} />);
    expect(wrapper.find(ItemDetailSection)).toHaveLength(0);
  });
});
