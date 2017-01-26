import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Settings from './Settings';

describe('<Settings/>',  () => {
  it('should render as a div',  () => {
    const wrapper = shallow(<Settings/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it.skip('should display a path of /settings',  () => {
    const wrapper = shallow(<Settings/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
