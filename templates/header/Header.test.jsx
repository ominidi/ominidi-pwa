import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
