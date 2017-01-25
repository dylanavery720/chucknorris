
import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Button from './Button';

describe('<Button/>', () => {
  it('should display a single button', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.find('button')).to.have.length(1);
  });
});
