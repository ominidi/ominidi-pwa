import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('Layout', () => {
  const children = <div>Children</div>;

  it('should render its children inside layout_content element', () => {
    const wrapper = shallow(
      <Layout>
        {children}
      </Layout>,
    );

    expect(wrapper.find('.layout__content').prop('children')).toEqual(children);
  });

  it('should render a Footer', () => {
    const wrapper = shallow(
      <Layout>
        {children}
      </Layout>,
    );

    expect(wrapper.find('Footer').length).toBe(1);
  });
});
