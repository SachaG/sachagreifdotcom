import React from 'react'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'

import styleSheet from 'styled-components/lib/models/StyleSheet';

const BUILD_TIME = new Date().getTime()

const gaCode = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-30194315-4', 'auto');
  ga('send', 'pageview');
`

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string,
    }
  },
  render () {
    const head = Helmet.rewind()

    // styled-components
    const styles = styleSheet.sheet ? styleSheet.rules().map(rule => rule.cssText).join('\n') : null;

    // let css
    // if (process.env.NODE_ENV === 'production') {
    //   css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    // }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16"/>
          <link rel="manifest" href="/images/manifest.json"/>
          <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#eb613d"/>
          <link rel="shortcut icon" href="/images/favicon.ico"/>
          <meta name="msapplication-config" content="/images/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>

          {head.title.toComponent()}
          {head.meta.toComponent()}

          {!!styles ? <style dangerouslySetInnerHTML={{ __html: styles }} /> : null}
        </head>
        <body>
          <script dangerouslySetInnerHTML={{__html: gaCode}} />
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {/* <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} /> NO BUNDLE NEEDED!*/}
        </body>
      </html>
    )
  },
})
