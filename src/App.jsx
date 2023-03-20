import React, { useState } from 'react'
import './App.css'
import Card from "./Components/Card"
import Form from "./Components/Form"


function App() {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  })
  const handleForm =(ev)=> {
    const {name, value} = ev.target
    setFormData((prev)=>({...prev, [name]: value}))

  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="container">
            <Card formData={formData}/>
            <Form  handleForm={handleForm} formData={formData} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default App
