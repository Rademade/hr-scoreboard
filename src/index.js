import React, { useEffect } from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import App from "./components/app"
import store from "./state/store"
import { startSync } from "./state/actions"

const AppStateWrapper = () => {
  useEffect(() => {
    const { dispatch } = store
    dispatch(startSync())
    const interval = setInterval(() => dispatch(startSync()), 3600 * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<AppStateWrapper />, document.getElementById("root"))
serviceWorker.unregister()
