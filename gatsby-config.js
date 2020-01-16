// require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `SachaGreif.com`
    },
    plugins: [
        // 'gatsby-transformer-yaml',
        // {
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         name: `translations`,
        //         path: `${__dirname}/src/translations/`
        //     }
        // },
        'gatsby-transformer-remark',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        'gatsby-plugin-netlify',
        'gatsby-plugin-styled-components'
        // 'gatsby-plugin-webpack-bundle-analyzer',
    ]
}
