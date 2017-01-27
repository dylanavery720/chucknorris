
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Joke from './Joke';

describe('<Joke/>', () => {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Joke/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
