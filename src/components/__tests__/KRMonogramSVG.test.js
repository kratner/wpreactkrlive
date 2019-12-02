import React from "react";
import { shallow } from "enzyme";
import KRMonogramSVG from "../KRMonogramSVG";

describe("KRMonogramSVG", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<KRMonogramSVG />);
    expect(wrapper).toMatchSnapshot();
  });
});
