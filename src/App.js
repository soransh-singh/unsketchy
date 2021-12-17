import {useState, useEffect} from 'react'
import { createApi } from 'unsplash-js'
import Info from './components/Info'
import Form from './components/Form'
import ImagePreview from './components/ImagePreview'

/*
  Things to do:
  - try to impement react router
  Form:
  X- also try to move form into it's own component
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

  // use state to store image
  const [images, setImagesResponse] = useState(null)

  //useState for api call
  const [query, setQuery] = useState("")

  // use state for timer
  const [timer, setTimer] = useState("2")

  // use state for conditional renedring
  const [showImages, setShowImages] = useState(false)

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

  function handleSubmit(input){
    console.log("form submitted");
    setQuery(input.type)
    setTimer(input.time)
    setShowImages(true)
  }

  console.log(images)

  return (
    <>
    <header>
      <h1 className="logo">unSketchy</h1>
    </header>
    <main className="flex">
      {(!showImages)?
        <>
          <Info />
          <Form handleSubmit={handleSubmit}/>
        </>:
        <ImagePreview images={images.response} timer={timer} back={()=>setShowImages(false)}/>
      }
    </main>
    </>
  );
}

export default App;
