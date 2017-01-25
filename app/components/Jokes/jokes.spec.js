import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Jokes from './Jokes';

describe('<Jokes/>', function () {
  it('should render as a div', function () {
    const wrapper = shallow(<Jokes/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
