import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import './App.css'
import Card from "./Components/Card"
import Form from "./Components/Form"
import ThankPage from "./Components/ThankPage"


function App() {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  })
  // const navigate = useNavigate()
  const handleForm =(ev)=> {
    const {name, value} = ev.target
    setFormData((prev)=>({...prev, [name]: value}))

  }
  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(formData)
    // navigate('/thankyou')
  }

  return (
    <div className="container">
      <Card formData={formData}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form  handleForm={handleForm} formData={formData} handleSubmit={handleSubmit}/>}/>
          <Route path="/thankyou" element={<ThankPage />} />
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App
