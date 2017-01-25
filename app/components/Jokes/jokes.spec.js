import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Jokes from './Jokes';

describe('<Jokes/>',  () => {
  it('should render as a div',  () => {
    const wrapper = shallow(<Jokes/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
