import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Navigation />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render an menu item for each item present in the menuItem prop', () => {
    const navItems = [
      {
        href: '/',
        title: 'Manifest',
        text: 'Manifest',
        icon: 'manifest',
      },
      {
        href: '/photos',
        title: 'Photos',
        text: 'Photos',
        icon: 'photos',
      },
    ];

    const wrapper = shallow(<Navigation navItems={navItems} />);

    expect(wrapper.find('.navigation__item').length).toEqual(navItems.length);
    wrapper.find('.navigation__link').forEach((item) => {
      expect(navItems.some(element => element.href === item.prop('href'))).toBe(true);
      expect(navItems.some(element => element.title === item.prop('title'))).toBe(true);
      expect(navItems.some(element => element.text === item.text())).toBe(true);
    });
  });
});
