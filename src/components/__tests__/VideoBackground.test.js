import React from "react";
import { shallow } from "enzyme";
import VideoBackground from "../VideoBackground";

describe("VideoBackground", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<VideoBackground />);
    expect(wrapper).toMatchSnapshot();
  });
});
