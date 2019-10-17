import React, { useEffect } from "react"
import { Provider } from "react-redux"
import firebase from "firebase"
import Scoreboard from "./scoreboard/Scoreboard"
import { firebaseConfig } from "./services/config"
import store from "./state/store"
import { startSync } from "./state/actions"

firebase.initializeApp(firebaseConfig)
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
