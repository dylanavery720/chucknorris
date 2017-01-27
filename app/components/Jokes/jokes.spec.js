import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Jokes from './Jokes';

describe('<Jokes/>', () => {
  const fakeArray = ['ham', 'cheese', 'bologna']
  it('should render as a div', () => {
    const wrapper = shallow(<Jokes data={fakeArray}/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it('Each joke has a star icon button for favorites', () => {
    const wrapper = shallow(<Jokes data={fakeArray}/>);
    const button = wrapper.find('Button').first()
    expect(button.prop('text')).to.equal('★')
  });
  it.skip('Each joke has a star icon that when clicked changes colors.', () => {
    const wrapper = shallow(<Jokes favorites={fakeArray}/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it.skip('When a joke is “starred” it gets moved to “Favorite Jokes”.', () => {
    const wrapper = mount(<Jokes data={fakeArray}/>);
    // console.log(wrapper.debug())
    expect(wrapper.find('div')).to.have.length(1);
  });
});
