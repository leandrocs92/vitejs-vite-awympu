import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './button'
import App from './App'
import './index.css'



const App = () => {

  return (
    <div className='App'>
      Hello World
      <Button onClick={() => soma(10, 20)} name="Leandro Silveira" />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
