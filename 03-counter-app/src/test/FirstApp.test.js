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

  test("Show CounterApp ", () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Show default value 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const newValue = wrapper.find("h2").text().trim();

    expect(newValue).toBe("100");
  });
});
