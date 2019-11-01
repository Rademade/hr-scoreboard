import React, { useEffect } from "react"
import { Provider } from "react-redux"
import Scoreboard from "./containers/Scoreboard"
import store from "./state/store"
import { startSync } from "./state/actions"

const App = () => {
  useEffect(() => {
    const { dispatch } = store
    dispatch(startSync())
    const interval = setInterval(() => dispatch(startSync()), 3600 * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Provider store={store}>
      <Scoreboard />
    </Provider>
  )
}

export default App
