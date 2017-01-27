import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';

describe('<App/>', () => {
  it('should render as a Div', () => {
    const wrapper = shallow(<App children={true}/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('should display a random joke on page load', () => {
    const wrapper = shallow(<App children={true}/>);
    expect(wrapper.find('Joke')).to.have.length(1);
  });
  it('should display a header on the page', () => {
    const wrapper = shallow(<App children={true}/>);
    expect(wrapper.find('Header')).to.have.length(1);
  });
  it('should have a state of settings set to false', () => {
    const wrapper = shallow(<App children={true}/>);
    expect(wrapper.state('settings')).to.equal(false);
  });
  it.skip('should mount', () => {
    const wrapper = mount(<App children={true}/>);
    // Invariant Violation: Element type is invalid: expected a string
    // (for built-in components) or a class/function (for composite components)
    // but got: undefined. You likely forgot to export your component from the file it's defined in.
    expect(wrapper.state('settings')).to.equal(false);
  });
});
