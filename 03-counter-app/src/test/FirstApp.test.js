import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
// import { render } from "@testing-library/react";

describe("Test on <CounterApp />", () => {
  /*test('Show message "Hi, i am a App" ', () => {
    const hi = "Hi, i am a App";
    const { getByText } = render(<FirstApp hello={hi} />);

    expect(getByText(hi)).toBeInTheDocument();
  });*/

  /*test("Show Firstapp ", () => {
    const hi = "Hi, i am a App";
    const wrapper = shallow(<FirstApp hello={hi} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Show proops subtitle ", () => {
    const hi = "Hi, i am a App";
    const subtitle = "I am a subtitle";

    const wrapper = shallow(<FirstApp hello={hi} subtitle={subtitle} />);

    const PText = wrapper.find("p").text();
    expect(PText).toBe(subtitle);
  });*/

  let wrapper = shallow(<CounterApp value={10} />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp value={10} />);
  });

  test("Show CounterApp ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Show default value 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const newValue = wrapper.find("h2").text().trim();

    expect(newValue).toBe("100");
  });

  test("Increment value ", () => {
    wrapper.find("button").at(0).simulate("click");

    const newValue = wrapper.find("h2").text().trim();

    expect(newValue).toBe("11");
    console.log(newValue);
  });

  test("Drecementar value ", () => {
    wrapper.find("button").at(2).simulate("click");

    const newValue = wrapper.find("h2").text().trim();

    expect(newValue).toBe("9");
    console.log(newValue);
  });

  test("firts value ", () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const newValue = wrapper.find("h2").text().trim();
    console.log(newValue);
    expect(newValue).toBe("105");
  });
});
