import React from "react";
import { shallow } from "enzyme";
import BGVideoSwitch from "../BGVideoSwitch";

describe("BGVideoSwitch", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<BGVideoSwitch />);
    expect(wrapper).toMatchSnapshot();
  });
});
