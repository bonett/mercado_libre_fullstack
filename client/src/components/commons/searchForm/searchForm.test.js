import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchFormComponent from "./searchForm";
import { SearchForm } from "./searchForm.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For SearchFormComponent", () => {
  it("should render content for SearchFormComponent", () => {
    const props = {
      query: "",
      handleInputSearch: () => {},
      handleSearchButton: () => {},
    };
    const wrapper = shallow(<SearchFormComponent {...props} />);
    expect(wrapper.find(SearchForm)).toHaveLength(1);
  });
});
