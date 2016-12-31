import ReactGA from 'react-ga'
ReactGA.initialize('UA-30194315-4')

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname)
}
