import React from "react";
import { shallow } from "enzyme";
import OECodeSamplesList from "../OECodeSamplesList";

describe("OECodeSamplesList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<OECodeSamplesList />);
    expect(wrapper).toMatchSnapshot();
  });
});
