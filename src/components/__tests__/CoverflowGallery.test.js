import React from "react";
import { shallow } from "enzyme";
import CoverflowGallery from "../CoverflowGallery";

describe("CoverflowGallery", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<CoverflowGallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
