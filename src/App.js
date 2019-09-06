import React, { useReducer, createContext, useEffect } from "react"
import firebase from "firebase"
import axios from "axios"
import { appReducer, initialState } from "./reducer"
import Scoreboard from "./components/Scoreboard"
import { API_URL, firebaseConfig } from "./config"

firebase.initializeApp(firebaseConfig)
export const AppStateContext = createContext({})

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  console.log("app state", state)

  useEffect(() => {
    async function doAuth() {
      try {
        const response = await axios.post(API_URL + "/auth", {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        })
        console.log("auth resp", response)
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message })
      }
    }
    doAuth()
  }, [])

  return (
    <AppStateContext.Provider value={state}>
      <Scoreboard />
    </AppStateContext.Provider>
  )
}

export default App
