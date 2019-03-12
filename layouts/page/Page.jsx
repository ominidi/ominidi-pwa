import React from 'react';
import PropTypes from 'prop-types';
import SiteLayout from '../site-layout/Site';
import Section from '../../templates/section/Section';

const Page = ({ title, children, render }) => (
  <SiteLayout>
    {render && render.head()}
    <Section>
      <Section.Header>
        <Section.Title>
          {title}
        </Section.Title>
      </Section.Header>

      <Section.Content>
        {children}
      </Section.Content>
    </Section>
  </SiteLayout>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  render: PropTypes.shape({
    head: PropTypes.func,
  }),
};

Page.defaultProps = {
  render: {
    head: () => { },
  },
};

export default Page;
