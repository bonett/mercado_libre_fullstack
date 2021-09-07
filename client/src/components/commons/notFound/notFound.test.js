import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFoundComponent from "./notFound";
import {
  NotFoundContent,
  NotFoundMedia,
  NotFoundMessage,
  NotFoundText,
  NotFoundButton,
} from "./notFound.styled";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Case For NotFoundComponent", () => {
  it("should render content for NotFoundComponent", () => {
    const props = { handleClearFilter: () => {} };
    const wrapper = shallow(<NotFoundComponent {...props} />);
    expect(wrapper.find(NotFoundContent)).toHaveLength(1);
    expect(wrapper.find(NotFoundMedia)).toHaveLength(1);
    expect(wrapper.find(NotFoundMessage)).toHaveLength(1);
    expect(wrapper.find(NotFoundText)).toHaveLength(1);
    expect(wrapper.find(NotFoundButton)).toHaveLength(1);
  });
});
