import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';

describe('Section', () => {
  const children = <div>Children</div>;

  it('should render a section element', () => {
    const wrapper = shallow(
      <Section>
        {children}
      </Section>,
    );

    expect(wrapper.type()).toEqual('section');
  });

  describe('Header', () => {
    it('should render a header element', () => {
      const wrapper = shallow(
        <Section.Header>
          {children}
        </Section.Header>,
      );

      expect(wrapper.type()).toEqual('header');
      expect(wrapper.find('.section__header').prop('children')).toEqual(children);
    });
  });

  describe('Title', () => {
    it('should render an h2 title', () => {
      const title = 'A title';
      const wrapper = shallow(
        <Section.Title>
          {title}
        </Section.Title>,
      );

      expect(wrapper.type()).toEqual('h2');
      expect(wrapper.find('.section__title').text()).toEqual(title);
    });
  });

  describe('Content', () => {
    it('should render a div element that wrap the content', () => {
      const wrapper = shallow(
        <Section.Content>
          {children}
        </Section.Content>,
      );

      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('.section__content').prop('children')).toEqual(children);
    });
  });
});
