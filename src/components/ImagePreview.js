import {useState} from 'react'

/*
  Things to do:
  - Set pause button
  - set info button
  - set a timer
*/


function ImagePreview(props) {

  const [current, setCurrent] = useState(0)
  const imageArr = props.images
  
  function handleCurrent(event) {
    switch (event) {
      case "PREV":
        setCurrent(prev => prev>0?prev-1:imageArr.length-1)
        break;
        case "NEXT":
          setCurrent(prev => prev<imageArr.length-1?prev+1:0)
          break;
      default:

    }
  }

  return (
    <div>
      <div>
        <button onClick={()=>handleCurrent("PREV")}>prev</button>
        <button>pause</button>
        <button onClick={()=>handleCurrent("NEXT")}>next</button>
        <button>info</button>
      </div>
      <img
        src={imageArr[current].urls.regular}
        alt="this is what you have to draw..."
      />
    </div>
  )
}

export default ImagePreview
