import {useState} from 'react'

function Form(props){

  // use state for form
  const [input, setInput] = useState({
    type: "",
    time: ""
  })

  function handleInput(event){
    const {name, value} = event.target
    setInput((prevInput)=>({
      ...prevInput,
      [name]: value
    }))
  }

  return (
    <div>
      <label>
        <p>Type of reference:</p>
        <select name="type" value={input.type} onChange={handleInput}>
          <option value="">--SELECT--</option>
          <option value="human">Human</option>
          <option value="animal pet">Animals</option>
          <option value="building structure">Structures and Building</option>
          <option value="fruit vegetable berry">Vegetation</option>
          <option value="insect">Insect</option>
        </select>
      </label>
      <label>
        <p>Time:</p>
        <select name="time" value={input.time} onChange={handleInput}>
          <option value="">--SELECT--</option>
          <option value="10">10 seconds</option>
          <option value="30">30 seconds</option>
          <option value="60">1 minute</option>
          <option value="120">2 minutes</option>
          <option value="300">5 minutes</option>
          <option value="600">10 minutes</option>
        </select>
      </label>
      <button className="btn" onClick={()=>props.handleSubmit(input)}>Start</button>
    </div>
  )
}

export default Form
