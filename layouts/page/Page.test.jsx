import React from 'react';
import { shallow } from 'enzyme';
import Section from '../../templates/section/Section';
import Page from './Page';

describe('Page', () => {
  const title = 'A page title';
  const children = <div>Children</div>;

  it('should render a section header with a title', () => {
    const wrapper = shallow(
      <Page title={title}>
        {children}
      </Page>,
    );

    expect(wrapper.find(Section.Header).length).toEqual(1);
    expect(wrapper.find(Section.Title).length).toEqual(1);
    expect(wrapper.find(Section.Title).prop('children')).toEqual(title);
  });

  it('should render the children inside a section content element', () => {
    const wrapper = shallow(
      <Page title={title}>
        {children}
      </Page>,
    );

    expect(wrapper.find(Section.Content).prop('children')).toEqual(children);
  });

  it('should render an optional render.head prop function', () => {
    const element = <div>An element</div>;
    const head = jest.fn(() => element);
    shallow(
      <Page
        title={title}
        render={{ head }}
      >
        {children}
      </Page>,
    );

    expect(head).toHaveBeenCalledTimes(1);
  });
});
