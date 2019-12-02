import React from "react";
import { shallow } from "enzyme";
import LiveButton from "../LiveButton";

describe("LiveButton", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<LiveButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
