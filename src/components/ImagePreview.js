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
        console.log("there is some error")
    }
  }

  return (
    <div className="image-preview">
      <div className="image-preview__btns">
        <button className="image-preview__btn image-preview__btn--back" onClick={props.back}>{/*back*/}<i class="fas fa-arrow-left"></i></button>
        <p className="image-preview__timer">{props.timer}</p>
        <button className="image-preview__btn" onClick={()=>handleCurrent("PREV")}>{/*prev*/}<i class="fas fa-backward"></i></button>
        <button className="image-preview__btn">{/*pause and play  :: <i class="fas fa-play"></i> */}<i class="fas fa-pause"></i></button>
        <button className="image-preview__btn" onClick={()=>handleCurrent("NEXT")}>{/*next*/}<i class="fas fa-forward"></i></button>
        <button className="image-preview__btn">{/*info*/}<i class="fas fa-info"></i></button>
      </div>
      <img
        src={imageArr[current].urls.regular}
        alt="this is what you have to draw..."
        className="image-preview__image"
      />
    </div>
  )
}

export default ImagePreview
