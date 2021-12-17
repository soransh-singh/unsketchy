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
        <button className="btn" onClick={props.back}>{/*back*/}<i class="fas fa-arrow-left"></i></button>
        <p>{props.timer}</p>
        <button className="btn" onClick={()=>handleCurrent("PREV")}>{/*prev*/}<i class="fas fa-backward"></i></button>
        <button className="btn">{/*pause and play  :: <i class="fas fa-play"></i> */}<i class="fas fa-pause"></i></button>
        <button className="btn" onClick={()=>handleCurrent("NEXT")}>{/*next*/}<i class="fas fa-forward"></i></button>
        <button className="btn">{/*info*/}<i class="fas fa-info"></i></button>
      </div>
      <img
        src={imageArr[current].urls.regular}
        alt="this is what you have to draw..."
      />
    </div>
  )
}

export default ImagePreview
