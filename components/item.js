import React from 'react'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import {ItemTitle, ItemDescription, ItemBlock} from './styled/styled.js';

const Item = ({title, description, url}) => 
  <ItemBlock className="item">
    <ItemTitle className="item-title"><a href={url}>{title}</a></ItemTitle>
    {description ? <ItemDescription className="item-description" dangerouslySetInnerHTML={{ __html: md.render(description) }} /> : null }
  </ItemBlock>

export default Item