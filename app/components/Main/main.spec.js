import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Main from './Main';

describe('<Main/>', () => {
  it('should render 3 divs', () => {
    const wrapper = shallow(<Main children={true}/>);
    expect(wrapper.find('div')).to.have.length(2);
  });
  it('should have a favorites button', () => {
    const wrapper = shallow(<Main children={true}/>);
    const favorites = wrapper.find('Button').last()
    expect(favorites.prop('text')).to.equal('Favorites');
  });
  it('favorites button should load /favorites path', () => {
    const wrapper = shallow(<Main children={true}/>);
    const favorites = wrapper.find('Button').last()
    expect(favorites.prop('src')).to.equal('/favorites');
  });
  it('should have an input field to set the number of jokes to return', () => {
    const wrapper = shallow(<Main children={true}/>);
    const jokenumber = wrapper.find('Input')
    expect(jokenumber.prop('clas')).to.equal('number-input');
    expect(jokenumber.prop('placeholder')).to.equal('5');
  });
});

// TypeError: Cannot assign to read only property 'value' of object '#<Object>'

// Invariant Violation: Element type is invalid: expected a string (for built-in components)
// or a class/function (for composite components) but got: undefined.
// You likely forgot to export your component from the file it's defined in.
