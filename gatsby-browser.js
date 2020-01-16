const ReactGA = require('react-ga')
ReactGA.initialize('UA-30194315-4')

exports.onRouteUpdate = ({ location }) => {
  ReactGA.pageview(location.pathname)
}
