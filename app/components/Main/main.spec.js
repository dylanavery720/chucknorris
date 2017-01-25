import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Main from './Main';

describe('<Main/>', function () {
  it('should render as a div', function () {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
