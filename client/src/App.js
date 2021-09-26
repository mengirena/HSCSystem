import React, { useState } from 'react'
import axios from "axios"
import {saveAs} from "file-saver"

import './App.css'



function App() {
  const [state, setState] = useState({
    name:"",
    receiptID: 0,
    price1: 0,
    preice2: 0,
  })

  const handleChange = ( {target: {value, name}} ) => {
    setState({[name]: value})
    // console.log('handleChange')
    // console.log(state)
  }

  const createAndDownloadPdf = () => {}

  return (
    <div className="App">
      <input type='text' placeholder="Name" name="name" onChange={handleChange} />
      <input type='number' placeholder="Receipt ID" name="receiptId" onChange={handleChange} />
      <input type='number' placeholder="Price 1" name="price1" onChange={handleChange} />
      <input type='number' placeholder="Price 2" name="price2" onChange={handleChange} />
      <button onClick={createAndDownloadPdf}>Download PDF</button> 
    </div>
  )
}

export default App;
