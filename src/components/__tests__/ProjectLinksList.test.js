import React from "react";
import { shallow } from "enzyme";
import ProjectLinksList from "../ProjectLinksList";

describe("ProjectLinksList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ProjectLinksList />);
    expect(wrapper).toMatchSnapshot();
  });
});
