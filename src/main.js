import React from 'react'
import ReactDom from 'react-dom'

class App1 {
  run = async (name = 'World') => {
    console.log(`Hello ${name}`)
  }
}

const app = new App1()

app.run()
  .then(() => console.log('Done!'))
  .catch(err => console.warn(`Error:${err}`))

const App = () => {
  return <h1>Hello!</h1>
}

ReactDom( <App/>, document.getElementById('root'))