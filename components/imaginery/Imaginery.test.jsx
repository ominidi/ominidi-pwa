import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Imaginery from './Imaginery';

describe('Imaginery', () => {
  let getRatio;

  const values = {
    width: 800,
    height: 600,
    ratio: 800 / 600,
  };

  beforeEach(() => {
    getRatio = sinon.stub();
    getRatio.onCall().returns(values);
  });

  afterEach(() => {
    getRatio.reset();
  });

  it('should render an element ready to be animated', () => {
    const wrapper = shallow(<Imaginery getRatio={getRatio} />);
    assert.equal(wrapper.hasClass('imaginery'), true);
  });

  it.skip('should call getRatio function on window.resize event', () => {
    // const wrapper = shallow(<Imaginery getRatio={getRatio} />);
  });
});
