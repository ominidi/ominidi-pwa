import React from 'react';
import { shallow } from 'enzyme';
import Site from './Site';

describe('Site', () => {
  const children = <div>Children</div>;

  it('should render its children inside the site-layout_content element', () => {
    const wrapper = shallow(
      <Site>
        {children}
      </Site>,
    );

    expect(wrapper.find('.site-layout_content').prop('children')).toEqual(children);
  });

  it('should render a Footer', () => {
    const wrapper = shallow(
      <Site>
        {children}
      </Site>,
    );

    expect(wrapper.find('Footer').length).toBe(1);
  });
});
