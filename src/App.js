import React, { useEffect } from "react"
import styled from "styled-components"
import firebase from "firebase"
import LaunchPlaceholder from "./components/LaunchPlaceholder"
import { firebaseConfig } from "./config"
import store from "./state/store"
import { startSync } from "./state/actions"

firebase.initializeApp(firebaseConfig)
const App = () => {
  useEffect(() => {
    const { dispatch, getState } = store
    const { isFirstLaunch } = getState()
    if (isFirstLaunch) {
      dispatch(startSync())
    }
    const interval = setInterval(() => dispatch(startSync()), 3600 * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <RootContainer>
      <LaunchPlaceholder />
    </RootContainer>
  )
}

const RootContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export default App
