import {useState, useEffect} from 'react'
import { createApi } from 'unsplash-js'
import Test from './Test'
import Info from './components/Info'
import ImagePreview from './components/ImagePreview'

/*
  Things to do:
  - Set a form
  - useState for handling form
  - useState for timer
  - useEffect for timer
  - remove PhotoComp
  - remove comments
  - remove Test
*/

const unplash = createApi({
    accessKey: process.env.REACT_APP_UNPLASH_API_KEY
  });

if(!process.env.REACT_APP_UNPLASH_API_KEY){
  console.log("there is no key available")
}

const PhotoComp = ({ photo }) => {
  const { urls } = photo;

  return (
    <>
      <img className="img" src={urls.regular} alt="draw it babe" />
    </>
  );
};

function App() {
  // use state for form
  // use state for timer
  // use state to maintain boolean
  const [images, setImagesResponse] = useState(null);
  const [timer, setTimer] = useState("2");

  // useEffect to fetch the image from api
  useEffect(() => {
    unplash.photos.getRandom({ query: 'pet', count: 5 })
      .then(result => {
        setImagesResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [timer]);

  console.log(images)
  const image = images === null? "loading..." : images.response.map((photo) => (
                    <PhotoComp  key={photo.id} photo={photo} />
                ))

  return (
    <main>
      <Info />
      <Test />
      {/* form section */}
      {images && <ImagePreview images={images.response}/>}
      {image}
    </main>
  );
}

export default App;
