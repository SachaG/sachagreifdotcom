import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import data from '../data/site.yaml'
import icons from '../data/icons.yaml'

import Section from '../components/section.js'
import SectionAbout from '../components/section-about.js'
import Menu from '../components/menu.js'
import Footer from '../components/footer.js'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <Menu />
        <SectionAbout {...data.about} index={0} />
        <Section {...data.code} index={1} />
        <Section {...data.projects} index={2} />
        <Section {...data.writing} index={3} />
        <Section {...data.podcasts} index={4} />
        <Section {...data.graveyard} index={5} />
        <Footer />
      </div>
    )
  }
}
