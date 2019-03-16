import React from 'react';
import { shallow } from 'enzyme';
import Meta from './Meta';

describe('Meta', () => {
  const data = {
    title: 'A title',
    description: 'A description',
    ogUrl: 'http://www.ominidi.org',
    ogImage: 'http://www.ominidi.org/image.png',
  };

  it('should render various meta tag', () => {
    const wrapper = shallow(
      <Meta
        title={data.title}
        description={data.description}
        ogUrl={data.ogUrl}
        ogImage={data.ogImage}
      />,
    );

    expect(wrapper.find('[name="description"]').prop('content')).toEqual(data.description);
    expect(wrapper.find('[property="og:description"]').prop('content')).toEqual(data.description);
    expect(wrapper.find('[property="og:title"]').prop('content')).toEqual(data.title);
    expect(wrapper.find('[property="og:url"]').prop('content')).toEqual(data.ogUrl);
    expect(wrapper.find('[property="og:image"]').prop('content')).toEqual(data.ogImage);
  });
});
