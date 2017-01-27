
import React from 'react';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';
import fetcher from './fetcher';

describe('fetcher', () => {
  it('should be a function', () => {
    assert.isFunction(fetcher)
  });
  it.skip('should fetch api data', () => {
    const funky = json => json
    const f = fetcher('http://api.icndb.com/jokes/random', funky)
  // assert.isFunction(fetcher)
  });
});
