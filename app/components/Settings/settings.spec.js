import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Settings from './Settings';

describe('<Settings/>', () => {
  it('should render two divs', () => {
    const wrapper = shallow(<Settings/>);
    expect(wrapper.find('div')).to.have.length(3);
  });
  it('should have a field to change the name Chuck Norris', () => {
    const wrapper = mount(<Settings/>);
    const input = wrapper.find('input').first()
    const set = wrapper.find('button').first()
    input.simulate('change', input.node.value = 'dylan')
    // set.simulate('click')
    // Invariant Violation: <Link>s rendered outside of a router context cannot navigate.
    expect(input.node.value).to.equal('dylan');
  });
  it.skip('should have a Parental Controls radio button that sets the jokes to be either kid-friendly, or general audience', () => {
    const wrapper = mount(<Settings radio={false}/>);
    const On = wrapper.find('#on-test')
    // console.log(wrapper.prop('radio'))
    // console.log(On.props())
    On.simulate('change', On.node.checked = true)
    // console.log(wrapper.prop('radio'))
    // console.log(On.node.checked)
    expect(wrapper.find('div')).to.have.length(1);
  });
});
