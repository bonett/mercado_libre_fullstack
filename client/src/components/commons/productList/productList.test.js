import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProductListComponent from "./productList";
import { ProductListContent } from "./productList.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For ProductListComponent", () => {
  it("should render content for ProductListComponent", () => {
    const props = { handleClickItem: () => {} };
    const wrapper = shallow(<ProductListComponent {...props} />);
    expect(wrapper.find(ProductListContent)).toHaveLength(1);
  });
});
