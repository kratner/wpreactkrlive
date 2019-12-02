import React from "react";
import { shallow } from "enzyme";
import MainImageGallery from "../MainImageGallery";

describe("MainImageGallery", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MainImageGallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
