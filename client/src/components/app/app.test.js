import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import AppComponent from "./app";
import HomeContainer from "../../containers/home";
import ItemContainer from "../../containers/item";
import ItemDetailContainer from "../../containers/itemDetail";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For AppComponent", () => {
  it("should render INITIAL STATE for AppComponent", () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]}>
        <AppComponent />
      </MemoryRouter>
    );
    expect(wrapper.find(HomeContainer)).toHaveLength(0);
    expect(wrapper.find(ItemContainer)).toHaveLength(0);
    expect(wrapper.find(ItemDetailContainer)).toHaveLength(0);
  });
});
