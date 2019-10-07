import React, { useReducer, createContext, useEffect } from "react"
import firebase from "firebase"
import axios from "axios"
import { appReducer, initialState } from "./reducer"
import Scoreboard from "./components/Scoreboard"
import { firebaseConfig } from "./config"

firebase.initializeApp(firebaseConfig)
export const AppStateContext = createContext({})

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  console.log("app state", state)

  useEffect(() => {
    async function doAuthPing() {
      try {
        console.log("test", document.cookie)
        const response = await axios.get("/authPing", { withCredentials: true })
        console.log("response", response.data)
      } catch(error) {
        console.log(error)
        dispatch({ type: "SET_ERROR", payload: error.message })
      }
    }
    doAuthPing()
  }, [])

  // useEffect(() => {
  //   async function doAuth() {
  //     try {
        
  //       const response = await axios.post(
  //         "/auth",
  //         {
  //           username: process.env.REACT_APP_USERNAME,
  //           password: process.env.REACT_APP_PASSWORD
  //         },
  //         { withCredentials: true }
  //       )
  //       console.log("headers", response.headers)
  //       console.log("response", response.data)
  //     } catch (error) {
  //       console.log(error)
  //       dispatch({ type: "SET_ERROR", payload: error.message })
  //     }
  //   }
  //   doAuth()
  // }, [])

  return (
    <AppStateContext.Provider value={state}>
      <Scoreboard />
    </AppStateContext.Provider>
  )
}

export default App
