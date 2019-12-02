import React from "react";
import { shallow } from "enzyme";
import SocialLinksList from "../SocialLinksList";

describe("SocialLinksList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SocialLinksList />);
    expect(wrapper).toMatchSnapshot();
  });
});
