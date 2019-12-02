import React from "react";
import { shallow } from "enzyme";
import BGVideoSwitch from "../BGVideoSwitch";

describe("BGVideoSwitch", () => {
  it("renders correctly", () => {
    const props = {
      "data-ctl": "bgvideoswitch",
      className: "ctl ctl__bgvideoswitch",
      title: "Switch Video Background"
    };
    const wrapper = shallow(<BGVideoSwitch {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
