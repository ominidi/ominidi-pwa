import React from 'react';
import renderer from 'react-test-renderer';
import Photo from './Photo';

const data = {
  id: '1',
  alt: 'An alt',
  caption: 'A caption',
  src: 'http://www.foo/img.jpg',
};

describe('Photo', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Photo {...data} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
