import { injectGlobal, css, keyframes } from 'styled-components';

import styled from 'styled-components';
import {orangered, black, white, grey} from '../data/colors.yaml'
import fonts from '../data/fontsizes.yaml'

/* 

Globals

*/

const spacing = {
  quarter: "10px",
  half: "20px",
  single: "40px",
  double: "80px"
}

const small = (...args) => css`
  @media screen and (max-width: 600px) {
    ${ css(...args) }
  }
`
const medium = (...args) => css`
  @media screen and (min-width: 601px) and (max-width: 1200px) {
    ${ css(...args) }
  }
`
const large = (...args) => css`
  @media screen and (min-width: 1201px) {
    ${ css(...args) }
  }
`

const easeOutCubic = 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'

injectGlobal`
  
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');

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
    margin: 0 0 ${spacing.single} 0;
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

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TextureWrapper = styled.div`
  svg {
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

/*

Sections

*/

export const SectionBlock = styled.section`
  ${small`
    padding: 10px 10px 10px 10px;
  `}
  ${medium`
    padding: 20px 80px 20px 80px;
    min-height: 100vh;
  `}
  ${large`
    padding: 40px 120px 40px 120px;
    min-height: 100vh;
  `}
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  &:last-of-type{
    .section-icon{
      &:after{
        display: none;
      }
    }
  }
  &.section-intro{
    perspective: 1000px;
    ${small`
      padding-top: 80px;
    `}
  }
`

export const SectionContents = styled.div`
  position: relative;
  z-index: 10;
  background: ${white};
  box-shadow: 8px 8px rgba(0,0,0,0.15);
  border-left: 40px solid #eee;
  ${small`
    padding: ${spacing.half} ${spacing.half};
  `}
  ${medium`
    padding: ${spacing.single} ${spacing.double};
  `}
  ${large`
    padding: ${spacing.single} ${spacing.double};
  `}
  // height: 100%;
  &.section-intro-contents{
    border: none;
    ${small`
      padding: ${spacing.double} ${spacing.half} ${spacing.half} ${spacing.half};
    `}
    ${medium`
      padding: ${spacing.double} ${spacing.single} ${spacing.single} ${spacing.single};
    `}
    ${large`
      padding: ${spacing.double} ${spacing.double};
    `}
  }
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
`

export const SectionHeader = styled.div`

`

export const SectionCTA = styled.a`
  margin-top: ${spacing.half};
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
  margin-bottom: ${spacing.quarter};
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
  p+p{
    margin-top: ${spacing.half};
  }
`
/*

Logo

*/

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const LogoBlock = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  span {
    display: none;
  }
  opacity: 0;
  animation: ${fadeIn} 400ms 700ms ${easeOutCubic} 1;
  animation-fill-mode: forwards;
  z-index: 120;
`



export const LogoImage = styled.h1`
  position: relative;
  width: 120px;
  height: 120px;
  background: ${black};
  padding: 20px;
  border-radius: 100%;
  margin: 0;
  path{
    fill: white;
  }
`

/* 

Icons

*/

export const IconBlock = styled.div`
  ${small`
    display: none;
  `}
  display: flex;
  position: absolute;
  left: -60px;
  top: 35px;
  justify-content: center;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 110;
  border-radius: 100%;
  border: 4px solid ${black};
  width: 80px;
  height: 80px;
  font-size: ${fonts.large};
  color: ${black};

  background: ${orangered};
  border-color: ${orangered};

  // &:hover{
  //   background: ${orangered};
  //   border-color: ${orangered};
  //   color: ${white};
  //   text-decoration: none;
  // }
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

      fill: transparent;
    }
  }
`

/*

Intro

*/

export const AboutWrapper = styled.div`
  position: relative;
`

const swingDown = keyframes`
  from { opacity: 0; transform: rotateX(-80deg); }
  to { opacity: 1; transform: rotateX(0deg); }
`

export const AboutContents = styled.div`
  transform-origin: top;
  perspective: 500px;
  opacity: 0;
  transform: rotateX(-80deg);
  animation: ${swingDown} 400ms 1000ms ${easeOutCubic} 1;
  animation-fill-mode:forwards;
  position: relative;
  z-index: 10;
  background: ${white};
  box-shadow: 8px 8px rgba(0,0,0,0.15);
  ${small`
    padding: ${spacing.double} ${spacing.half} ${spacing.half} ${spacing.half};
  `}
  ${medium`
    padding: ${spacing.double} ${spacing.single} ${spacing.single} ${spacing.single};
  `}
  ${large`
    padding: ${spacing.double} ${spacing.double};
  `}
`

export const AboutDescription = styled.div`
  ${small`
    font-size: ${fonts.small};
  `}
  ${medium`
    font-size: ${fonts.large};
  `}
  ${large`
    font-size: ${fonts.large};
  `}
  margin-bottom: ${spacing.single};
  p{
    margin-bottom: ${spacing.single}; 
  }
`

export const AboutLinksBlock = styled.div`
  margin-bottom: ${spacing.single};
`

export const AboutLink = styled.a`
  display: block;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${small`
    padding: 0 ${spacing.half};
  `}
`

const grow = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
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
  margin: 0 10px;
  transform: scale(0);
  animation: ${grow} 300ms 1300ms ${easeOutCubic} 1;
  animation-fill-mode:forwards;

  &:nth-child(3), &:nth-child(5){
    animation-delay: 1400ms;
  }
  &:nth-child(2), &:nth-child(6){
    animation-delay: 1500ms;
  }
`

const expand = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`

export const SocialLinksPlaceholder = styled.span`
  ${small`
    display: none;
  `}
  display: block;
  height: 1px;
  border-bottom: 1px dotted ${black};
  flex: 1;
  transform: scaleX(0);
  animation: ${expand} 100ms 1600ms ${easeOutCubic} 1;
  animation-fill-mode:forwards;
  &:first-of-type{
    margin-right: 10px;
    transform-origin: top right;
  }
  &:last-of-type{
    margin-left: 10px;
    transform-origin: top left;
  }
`

/*

Items

*/

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${large`
    > div {
      width: calc( ( 100% - ${spacing.double} ) / 2 );
    }
    > div:nth-child(2n) {
      margin-left: ${spacing.double};
    }
  `}
`

export const ItemBlock = styled.div`
  margin-top: ${spacing.single};  
`

export const ItemTitle = styled.h3`
  font-size: ${fonts.medium};
  margin-bottom: ${spacing.quarter};
`

export const ItemDescription = styled.div`
  font-size: ${fonts.small};
  p{
    margin-bottom: ${spacing.half};
    &:last-of-type{
      margin-bottom: 0;
    }
  }
`
export const ItemDate = styled.span`
  color: ${grey};
  font-weight: normal;
`

/*

Footer

*/

export const FooterContainer = styled.div`
  ${small`
    padding: 10px 10px 10px 10px;
  `}
  ${medium`
    padding: ${spacing.half};
  `}
  ${large`
    padding: ${spacing.half};
  `}
  text-align: center;
  background: ${black};
  color: ${white};
  font-size: ${fonts.extrasmall};
`