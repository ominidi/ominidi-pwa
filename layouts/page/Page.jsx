import React from 'react';
import PropTypes from 'prop-types';
import SiteLayout from '../site-layout/Site';
import Section from '../../templates/section/Section';
import '~static/scss/style.scss';

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
  render: PropTypes.func,
};

Page.defaultProps = {
  render: () => {},
};

export default Page;
