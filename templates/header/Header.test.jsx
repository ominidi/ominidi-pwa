import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

jest.mock('next/router', () => ({
  pathname: '/',
  withRouter: jest.fn(() => () => <nav className="navigation" />),
}));

describe('Header', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
