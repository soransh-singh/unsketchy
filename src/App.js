import {useState, useEffect} from 'react'
import { createApi } from 'unsplash-js'
import Info from './components/Info'
import Form from './components/Form'
import ImagePreview from './components/ImagePreview'

/*
  Things to do:
  - try to impement react router
  Form:
    - implement better form
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
    unplash.photos.getRandom({ query: query, count: 20 })
      .then(result => {
        setImagesResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [query]);

  function handleSubmit(input){
    setQuery(input.type)
    setTimer(input.time)
    setShowImages(true)
  }

  return (
    <>
      {(!showImages)?
        <>
        <header>
          <h1 className="logo">unSketchy</h1>
        </header>
        <main className="flex">
          <Info />
          <Form handleSubmit={handleSubmit}/>
        </main>
        </>:
        <main className="flex">
          <ImagePreview
            images={images.response}
            timer={timer}
            back={()=>setShowImages(false)}
          />
        </main>
      }
    </>
  );
}

export default App;
