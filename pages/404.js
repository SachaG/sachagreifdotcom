import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import data from '../data/site.yaml'
import icons from '../data/icons.yaml'

import Section from '../components/section.js'
import Footer from '../components/footer.js'

import { orangered } from '../data/colors.yaml'

import { Wrapper, SectionBlock, SectionContents, SectionTop, SectionHeader, SectionTitle, SectionDescription } from '../components/styled-components.js'

import Logo from '../components/logo.js'
import Texture from '../components/texture.js'

const contents = `
  Sorry, I couldn't find what you were looking for.

  Maybe you're looking for content from my [old site](http://v3.sachagreif.com)?
`
        
const Error404 = () =>

  <Wrapper style={{backgroundColor: orangered}}>

    <SectionBlock>

      <Texture className="svg-background" width={100} height={100} data={{}} options={{index: 0}}/>

      <Logo />

      <SectionContents>

        <SectionTop>

          <SectionHeader>

            <SectionTitle>404</SectionTitle>

            <SectionDescription dangerouslySetInnerHTML={{ __html: md.render(contents) }} />

          </SectionHeader>

        </SectionTop>

      </SectionContents>

    </SectionBlock>

    <Footer />

  </Wrapper>

export default Error404