import React from "react";
import { shallow } from "enzyme";
import SimpleCard from "../SimpleCard";

describe("SimpleCard", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<SimpleCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
