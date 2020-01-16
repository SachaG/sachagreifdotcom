import React from 'react';
import Helmet from 'react-helmet';

import data from '../data/site.yaml';
// import icons from '../data/icons.yaml'
import { GlobalStyle } from '../components/styled-components.js';
import Section from '../components/section.js';
import SectionIntro from '../components/section-intro.js';
import Footer from '../components/footer.js';

export default class Index extends React.Component {
  render() {
    const dataWithKeys = Object.keys(data).map(name => ({
      ...data[name],
      name,
    }));

    const [intro, ...rest] = dataWithKeys;

    return (
      <div>
        <GlobalStyle />
        <Helmet
          title="Sacha Greif"
          meta={[{ name: 'description', content: 'Sacha Greif: Designer, Developer, Entrepreneur' }]}
          link={[{ rel: 'shortcut icon', href: 'images/logo.png' }]}
        />
        <SectionIntro {...intro} index={0} />
        {rest.map((sectionData, index) => (
          <Section {...sectionData} index={index + 1} key={sectionData.name} />
        ))}
        <Footer />
      </div>
    );
  }
}
