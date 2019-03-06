import React from 'react';
import PropTypes from 'prop-types';
import SiteLayout from '../site-layout/Site';
import Section from '../../templates/section/Section';
import '~static/scss/style.scss';

const Page = ({ title, children }) => (
  <SiteLayout>
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
};

export default Page;
