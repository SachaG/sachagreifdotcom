import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import _ from 'underscore'

import data from '../data/site.yaml'
import icons from '../data/icons.yaml'

import Section from '../components/section.js'
import SectionIntro from '../components/section-intro.js'
import Footer from '../components/footer.js'

export default class Index extends React.Component {
  render () {

    const dataWithKeys = _.map(data, (item, key) => {
      item.name = key
      return item
    })

    const [intro, ...rest] = dataWithKeys

    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sacha Greif: Designer, Developer, Entrepreneur"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <SectionIntro {...intro} index={0} />
        {rest.map((sectionData, index) => <Section {...sectionData} index={index+1} key={sectionData.name} />)}
        <Footer />
      </div>
    )
  }
}
