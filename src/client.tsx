import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { isDevelopment } from './constants/env'
import App from './components/App'

const root = document.getElementById('root')

if (isDevelopment) {
  const init = async () => {
    const { default: NextApp } = await import('./components/App')

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      root,
    )
  }

  init()

  if (module.hot) {
    module.hot.accept('./components/App', init)
  }
} else {
  render(<App />, root)
}
