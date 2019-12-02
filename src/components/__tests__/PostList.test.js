import React from "react";
import { shallow } from "enzyme";
import PostList from "../PostList";

describe("PostList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<PostList />);
    expect(wrapper).toMatchSnapshot();
  });
});
