import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('react-cv-kn'))

serviceWorker.unregister()

console.log("%cYou really shouldn't be here... but welcome nonetheless!\nFeel free to snoop around.\n- prophet-kn, also known as Kacper Nowosielski", "font-size: 20px; color: #50e3c2; background-color: rgb(13, 0, 27);")
