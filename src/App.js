import {useState, useEffect} from 'react'
import { createApi } from 'unsplash-js'
import Info from './components/Info'
import ImagePreview from './components/ImagePreview'

/*
  Things to do:


  - try to impement react router
  Form: 
  - also try to move form into it's own component
  Timer:
  X- useState for timer
  - implement timer
  - useEffect for timer
  - remove comments
*/

const unplash = createApi({
    accessKey: process.env.REACT_APP_UNPLASH_API_KEY
  });

if(!process.env.REACT_APP_UNPLASH_API_KEY){
  console.log("there is no key available")
}

function App() {

  // use state for form
  const [input, setInput] = useState({
    type: "",
    time: ""
  })
  // use state to store image
  const [images, setImagesResponse] = useState(null)

  //useState for api call
  const [query, setQuery] = useState("")
  // use state for timer
  const [timer, setTimer] = useState("2")

  // useEffect to fetch the image from api
  useEffect(() => {
    unplash.photos.getRandom({ query: query, count: 8 })
      .then(result => {
        setImagesResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [query]);

  function handleInput(event){
    const {name, value} = event.target
    setInput((prevInput)=>({
      ...prevInput,
      [name]: value
    }))
  }

  function handleSubmit(){
    console.log("form submitted");
    setQuery(input.type)
    setTimer(input.time)
  }

  console.log(images)

  return (
    <main>
      <Info />
      <div>
        <label>
          Type of reference:
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
          Time:
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
        <button onClick={handleSubmit}>Start</button>
      </div>
      {timer}
      {images && <ImagePreview images={images.response}/>}
    </main>
  );
}

export default App;
