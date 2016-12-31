import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

import data from '../data/site.yaml'
import icons from '../data/icons.yaml'

import Section from '../components/section.js'
import Menu from '../components/menu.js'
import Footer from '../components/footer.js'

import { MenuContainer } from '../components/styled/styled.js'

import Logo from '../components/logo.js'

const contents = `
  Sorry, I couldn't find what you were looking for.

  Maybe you're looking for content from my [old site](http://v3.sachagreif.com)?
`
export default class Error404 extends React.Component {
  render () {
    return (
      <div>

        <MenuContainer>

          <Logo />

        </MenuContainer>
        
        <Section title="404" description={contents} />
        
        <Footer />

      </div>
    )
  }
}
