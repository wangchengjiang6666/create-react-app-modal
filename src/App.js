import React from 'react'
//import logo from './logo.svg'
//import './App.css'
import { Provider } from 'react-redux'
import { Routers } from '@router' // router 路由配置
import createStore from '@redux/store'
const store = createStore()
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routers />
      </Provider>
    </div>
  )
}

export default App
