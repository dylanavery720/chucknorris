import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Favorites from './Favorites';

describe('<Favorites/>', () => {
  const fakeArray = ['ham', 'cheese', 'bologna']
  it('should render as a div', () => {
    const wrapper = shallow(<Favorites favorites={fakeArray}/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
  it.skip('If there are no favorites, there should be a message indicating that there are no favorites.', () => {
    const wrapper = shallow(<Favorites favorites={fakeArray}/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
