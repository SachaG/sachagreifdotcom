import { injectGlobal, css } from 'styled-components';

import styled from 'styled-components';
import {orangered, black, white, grey} from '../../data/colors.yaml'
import fonts from '../../data/fontsizes.yaml'

const doubleSpacing = "80px";
const spacing = "40px";
const halfSpacing = "20px";
const quarterSpacing = "10px";

const small = (...args) => css`
  @media screen and (max-width: 500px) {
    ${ css(...args) }
  }
`
const medium = (...args) => css`
  @media screen and (min-width: 501px) and (max-width: 1200px) {
    ${ css(...args) }
  }
`
const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${ css(...args) }
  }
`

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body{
    font-family: "Space Mono", monospace, sans-serif;
    font-variant-ligatures: no-common-ligatures
    padding: 0;
    margin: 0;
    color: ${black};
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0 0 ${spacing} 0;
    line-height: 1.3;
  }

  p{
    margin: 0;
    line-height: 1.6;
  }

  a{
    color: ${orangered};
    text-decoration: none;
    font-weight: bold;
    &:hover{
      color: ${orangered};
      text-decoration: underline;
    }
  }
`;

export const Layout = styled.div`
  line-height: 1.6;
  position: relative;
`

export const MenuContainer = styled.div`
  display: none;
  ${large`
    display: flex;
  `}
  flex-direction: column;
  align-items: center;
  position: fixed;
  position: absolute;
  z-index: 100
  top: ${spacing};
  left: 60px;
  a+a{
    margin-top: ${spacing};
    margin-top: calc(100vh - 80px);
  }
  // &:before{
  //   display: block;
  //   position: absolute;
  //   content: " ";
  //   background: ${black};
  //   width: 8px;
  //   margin-left: -4px;
  //   left: 50%;
  //   height: 100%;
  // }
`

export const LogoBlock = styled.div`
  margin-bottom: ${spacing};
  margin-bottom: calc(100vh - 120px);
  span {
    display: none;
  }
`

export const Logo = styled.h1`
  position: relative;
  z-index: 120;
  width: 120px;
  height: 120px;
  background: ${black};
  // background: ${orangered};
  // border: 4px solid ${black};
  padding: 20px;
  border-radius: 100%;
  margin: 0;
  path{
    fill: white;
  }
  &:hover{
    // background: ${orangered};
  }
`

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 110;
  border-radius: 100%;
  // background: ${black};
  border: 4px solid ${black};
  width: 80px;
  height: 80px;
  // color: ${white};
  font-size: ${fonts.large};
  color: ${black};

  background: ${orangered};
  border-color: ${orangered};

  &:hover{
    background: ${orangered};
    border-color: ${orangered};
    color: ${white};
    text-decoration: none;
    svg{
      path, polygon, polyline, rect, line{
        fill: ${white};
        stroke: ${white};
      }
    }
  }
  &:before{
    display: block;
    position: absolute;
    content: " ";
    background: ${black};
    width: 4px;
    margin-left: -2px;
    left: 50%;
    top: calc(-100vh + 80px - 4px);
    height: ${spacing};
    height: calc(100vh - 80px);
  }
  span{
    display: block;
  }
  svg{
    display: block;
    height: 40px;
    width: 40px;
    path, polygon, polyline, rect, line{
      fill: ${black};
      stroke: ${black};

      fill: ${white};
      stroke: ${white};
    }
  }
`

export const SectionBlock = styled.section`
  // padding: ${spacing} 240px ${spacing} 360px;  
  ${small`
    padding: 0 10px 0 10px;
  `}
  ${medium`
    padding: 0 80px 0 80px;
  `}
  ${large`
    padding: 0 120px 0 240px;
    height: 100vh;
  `}

  // height: 1px;
  position: relative;
  // border-bottom: 1px dotted #ccc;
  // background: ${props => `rgba(0,0,0,${0+props.index/30})`};
  // svg{
  //   path{
  //     fill: #ffffff;
  //   }
  // }

  .svg-background{
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`



export const SectionContents = styled.div`
  position: relative;
  z-index: 10;
  background: ${white};
  ${small`
    padding: ${halfSpacing} ${halfSpacing};
  `}
  ${medium`
    padding: ${halfSpacing} ${halfSpacing};
  `}
  ${large`
    padding: ${spacing} ${doubleSpacing};
  `}
  height: 100%;
`

export const SectionTop = styled.div`
  ${medium`
    display: flex;
  `}
  ${large`
    display: flex;
  `}
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: calc(${spacing} * 1.5);
`

export const SectionHeader = styled.div`

`

export const SectionCTA = styled.a`
  margin-top: ${halfSpacing};
  border: 1px solid ${black};
  display: block;
  padding: 10px 20px;
  border-radius: 3px;
  color: ${black};
  font-weight: normal;
  box-shadow: 4px 4px ${black};
  &:hover{
    text-decoration: none;
    background: ${orangered};
    color: ${white};
    border-color: ${orangered};
  }
  &:active{
    position: relative;
    top: 2px;
    left: 2px;
    box-shadow: 2px 2px ${black};
  }
`

export const SectionTitle = styled.h2`
  ${small`
    font-size: ${fonts.large};
  `}
  ${medium`
    font-size: ${fonts.large};
  `}
  ${large`
    font-size: ${fonts.extralarge};
  `}
  line-height: 1;
  margin-bottom: ${quarterSpacing};
`

export const AboutDescription = styled.div`
  ${small`
    font-size: ${fonts.medium};
  `}
  ${medium`
    font-size: ${fonts.large};
  `}
  ${large`
    font-size: ${fonts.large};
  `}
  margin-bottom: ${spacing};
  p{
    margin-bottom: ${spacing};
  }
`

export const AboutLinksBlock = styled.div`
  margin-bottom: ${spacing};
`

export const AboutLink = styled.a`
  display: block;
`

export const SectionDescription = styled.div`
  ${small`
    font-size: ${fonts.small};
  `}
  ${medium`
    font-size: ${fonts.small};
  `}
  ${large`
    font-size: ${fonts.medium};
  `}
`

export const SocialLinks = styled.div`
  display: flex;
  margin-bottom: ${spacing};
  > * + * {
    margin-left: ${halfSpacing};
  }
`

export const SocialIcon = styled.div`
  height: 40px;
  width: 40px;
  background: ${black};
  border-radius: 100%;
  padding: 2px;
  path{
    fill: white;
  }
  &:hover{
    background: ${orangered};
  }
`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div{
    margin-bottom: ${spacing};  
  }
  ${large`
    > div {
      width: calc( ( 100% - ${doubleSpacing} ) / 2 );
    }
    > div:nth-child(2n) {
      margin-left: ${doubleSpacing};
    }
  `}
`

export const ItemBlock = styled.div`
`

export const ItemTitle = styled.h3`
  font-size: ${fonts.medium};
  margin-bottom: ${quarterSpacing};
`

export const ItemDescription = styled.div`
  font-size: ${fonts.small};
  p{
    margin-bottom: 0px;
  }
`
export const ItemDate = styled.span`
  color: ${grey};
  font-weight: normal;
`

export const FooterContainer = styled.div`
  text-align: center;
  padding: ${halfSpacing} 0;
  background: ${black};
  color: ${white};
  font-size: ${fonts.extrasmall};
  // border-top: 1px dashed ${black};
`