import {useState, useEffect} from 'react'
import { createApi } from 'unsplash-js'
import Test from './Test'

const unplash = createApi({
    accessKey: process.env.REACT_APP_UNPLASH_API_KEY
  });

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
  const [data, setPhotosResponse] = useState(null);
  const [timer, setTimer] = useState("2");

  // useEffect to fetch the image from api
  useEffect(() => {
    unplash.photos.getRandom({ query: 'pet', count: 1 })
      .then(result => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [timer]);


  const image = data === null? "loading..." : data.response.map((photo) => (
                    <PhotoComp  key={photo.id} photo={photo} />
                ))

  return (
    <main>
      <Test />
      {/* form section */}

      {image}
    </main>
  );
}

export default App;
