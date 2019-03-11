import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Navbar />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render an menu item for each item present in the menuItem prop', () => {
    const menuItems = [
      {
        href: '/',
        title: 'Manifest',
        text: 'Manifest',
      },
      {
        href: '/photos',
        title: 'Photos',
        text: 'Photos',
      },
    ];

    const wrapper = shallow(<Navbar menuItems={menuItems} />);

    expect(wrapper.find('.navbar__menu__item').length).toEqual(menuItems.length);
    wrapper.find('.navbar__menu__link').forEach((item) => {
      expect(menuItems.some(element => element.href === item.prop('href'))).toBe(true);
      expect(menuItems.some(element => element.title === item.prop('title'))).toBe(true);
      expect(menuItems.some(element => element.text === item.text())).toBe(true);
    });
  });
});
