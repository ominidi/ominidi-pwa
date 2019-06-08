import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Router from 'next/router';
import { Navigation } from './Navigation';

jest.mock('next/router', () => ({
  pathname: '/photos',
  withRouter: () => () => <div />,
}));

describe('Navigation', () => {
  const navItems = [
    {
      href: '/',
      title: 'Manifest',
      text: 'Manifest',
      className: 'to-manifest',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.229 13.229" height="50" width="50"><path d="M9.616 6.417l-.119-.099v-.473l-.177-.198-.139-.138-.315-.217h-.303l-.31.138-.335.296-.198.336h-.829l-.912.355-.47.198-.494.493-.474.46-.513.764-.04.494.139.612.375.632.099.592-.139.277-.316.375-.533.553-.217.256.158.237.119.257.829.612.197-.079h.316l-.02-.158-.236-.118.118-.119-.138-.197-.237-.237v-.178l.217-.099.75-.434.395-.296v-.257l.632.257-.118.395V12.42l.118.237v.098l.375-.098.119-.1.237.198H7.78l.414-.098v-.1H7.76l-.257-.335v-.434l.099-.691v-.316l.434-.691v-.375l.099-.356.118-.71v-.79l.119-.514.19-.099.244.323.454-.105.435-.316.138-.158V6.654zM7.148 9.616l-.198.335-.493-.454-.316-.237H6.852l.296-.217z" fill="#231f20" /></svg>,
    },
    {
      href: '/photos',
      title: 'Photos',
      text: 'Photos',
      className: 'to-photos',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.229 13.229" height="50" width="50"><path d="M9.616 6.417l-.119-.099v-.473l-.177-.198-.139-.138-.315-.217h-.303l-.31.138-.335.296-.198.336h-.829l-.912.355-.47.198-.494.493-.474.46-.513.764-.04.494.139.612.375.632.099.592-.139.277-.316.375-.533.553-.217.256.158.237.119.257.829.612.197-.079h.316l-.02-.158-.236-.118.118-.119-.138-.197-.237-.237v-.178l.217-.099.75-.434.395-.296v-.257l.632.257-.118.395V12.42l.118.237v.098l.375-.098.119-.1.237.198H7.78l.414-.098v-.1H7.76l-.257-.335v-.434l.099-.691v-.316l.434-.691v-.375l.099-.356.118-.71v-.79l.119-.514.19-.099.244.323.454-.105.435-.316.138-.158V6.654zM7.148 9.616l-.198.335-.493-.454-.316-.237H6.852l.296-.217z" fill="#231f20" /></svg>,
    },
  ];

  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Navigation
          navItems={navItems}
          router={Router}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render an menu item for each item present in the menuItem prop', () => {
    const wrapper = shallow(
      <Navigation
        router={Router}
        navItems={navItems}
      />,
    );

    expect(wrapper.find('.navigation__item').length).toEqual(navItems.length);

    wrapper.find('.navigation__link').forEach((item) => {
      expect(navItems.some(element => element.href === item.prop('href'))).toBe(true);
      expect(navItems.some(element => element.title === item.prop('title'))).toBe(true);
    });
  });

  it('should set the active class name on the right navigation item', () => {
    const wrapper = shallow(
      <Navigation
        navItems={navItems}
        router={Router}
      />,
    );

    expect(wrapper.find('.to-photos').hasClass('is-active')).toBe(true);
  });
});
