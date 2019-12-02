import React from "react";
import { shallow } from "enzyme";
import LinksList from "../LinksList";

describe("LinksList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<LinksList />);
    expect(wrapper).toMatchSnapshot();
  });
});
