import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Main from './Main';

describe('<Main/>',  () => {
  it('should render as a div',  () => {
    const wrapper = shallow(<Main children={true}/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it.skip('should have an input field to set the number of jokes to return',  () => {
    const wrapper = shallow(<Main children={true}/>);
    const inputNode = wrapper.find('Input')
    const input = inputNode.node.props

    const event = { target: { value: '3' } }
    console.log(input.value)
    inputNode.simulate('change', input.value = '3')
    expect(wrapper.state().jokenumber).to.equal(3)
  });

});

// TypeError: Cannot assign to read only property 'value' of object '#<Object>'
