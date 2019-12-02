import React from "react";
import { shallow } from "enzyme";
import Copyright from "../Copyright";

describe("Copyright", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Copyright />);
    expect(wrapper).toMatchSnapshot();
  });
});
