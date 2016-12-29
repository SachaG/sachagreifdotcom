import React from 'react'
import {FooterContainer} from './styled/styled.js';
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

const contents = `
  Made with [Gatsby](https://github.com/gatsbyjs/gatsby).
`

const Footer = () => 

  <FooterContainer dangerouslySetInnerHTML={{ __html: md.render(contents) }} />

export default Footer