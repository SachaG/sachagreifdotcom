import React from 'react'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

import moment from 'moment'

import {ItemTitle, ItemDescription, ItemBlock, ItemDate} from './styled-components.js';

const Item = ({title, description, url, date}) => 
  <ItemBlock className="item">
    <ItemTitle className="item-title">
      <a href={url}>{title}</a> 
      {date ? <ItemDate> {moment(date, 'MM/DD/YYYY').year()}</ItemDate> : null}
    </ItemTitle>
    {description ? <ItemDescription className="item-description" dangerouslySetInnerHTML={{ __html: md.render(description) }} /> : null }
  </ItemBlock>

export default Item