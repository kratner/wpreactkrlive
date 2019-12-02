import React from "react";
import { shallow } from "enzyme";
import PagesList from "../PagesList";

describe("PagesList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<PagesList />);
    expect(wrapper).toMatchSnapshot();
  });
});
