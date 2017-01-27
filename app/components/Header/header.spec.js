// header.spec.js


import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './Header';

describe('<Header/>', () => {
  it('should display a single h1 tag', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
  it('should have a title of Chuck Norris Joke Machine', () => {
    const wrapper = shallow(<Header/>);
    const title = wrapper.find('h1')
    expect(title.text()).to.equal('Chuck Norris Joke Machine');
  });
  it('settings button should load a path of /settings', () => {
    const wrapper = shallow(<Header/>);
    const settings = wrapper.find('Button')
    expect(settings.prop('src')).to.equal('/settings');
  });
  it.skip('should have a prop of settings that is set to true when button clicked', () => {
    const wrapper = shallow(<Header settings={false}/>);
    const settings = wrapper.find('Button')
    // console.log(wrapper.prop('settings'))
    settings.simulate('click')
    // <Link>s rendered outside of a router context cannot navigate.
    // console.log(wrapper.prop('settings'))
  });
});
