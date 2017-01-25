
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Input from './Input';

describe('<Input/>', function () {
  it('should display a single input', function () {
    const wrapper = shallow(<Input/>);
    expect(wrapper.find('input')).to.have.length(1);
  });
});
