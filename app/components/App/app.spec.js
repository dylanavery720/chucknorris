import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from './App';

describe('<App/>', function () {
  it('should render as a Div', () => {
    const wrapper = shallow(<App children={true}/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('should display a random joke on page load', () => {
    const wrapper = shallow(<App children={true}/>);
    expect(wrapper.find('Joke')).to.have.length(1);
  });
});
