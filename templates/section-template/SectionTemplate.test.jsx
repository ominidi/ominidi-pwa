import React from 'react';
import { shallow } from 'enzyme';
import SectionTemplate from './SectionTemplate';

describe('SectionTemplate', () => {
  const title = 'A title';
  const children = <div>Children</div>;

  it('should render a section with a title', () => {
    const wrapper = shallow(
      <SectionTemplate title={title}>
        {children}
      </SectionTemplate>,
    );

    expect(wrapper.type()).toEqual('section');
    expect(wrapper.find('.section__title').text()).toEqual(title);
  });
});
