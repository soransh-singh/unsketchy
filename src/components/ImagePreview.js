import {useState, useEffect, useRef} from 'react'

/*
  Things to do:
  - set info button
*/


function ImagePreview(props) {

  const [current, setCurrent] = useState(0)
  const imageArr = props.images

  const [timer, setTimer] = useState(props.timer)
  const [isPaused, setIsPaused] = useState(false)
  const Ref = useRef(null)

  useEffect(()=>{
    const id = setTimeout(() => {
      if(!isPaused){
        setTimer(prevTime => prevTime - 1)
      }
    }, 1000);
    Ref.current = id

    return ()=>{
      clearTimeout(Ref.current)
    }
  },[timer, isPaused])

  function resetTimer() {
    clearTimeout(Ref.current)
    setTimer(props.timer)
    setIsPaused(true)
  }

  const displayTimer = ()=>{
    let minute = Math.floor((timer/60)%60)
    let seconds = Math.floor((timer)%60)
    if(minute<= 9){
      minute = `0${minute}`
    }
    if(seconds<= 9){
      seconds = `0${seconds}`
    }
    return(
      `${minute}:${seconds}`
    )
  }

  function handleCurrent(EVENT) {
    switch (EVENT) {
      case "PREV":
        setCurrent(prev => prev>0?prev-1:imageArr.length-1)
        resetTimer()
        break;
      case "NEXT":
        setCurrent(prev => prev<(imageArr.length-1)?prev+1:0)
        resetTimer()
        break;
      case "PAUSE":
        setIsPaused(prevPause => !prevPause)
        break;
      default:
        console.log("there is some error")
    }
  }

  return (
    <div className="image-preview">
      <div className="image-preview__btns">
        <button className="image-preview__btn image-preview__btn--back" onClick={props.back}>{/*back*/}<i className="fas fa-arrow-left"></i></button>
        <p className="image-preview__timer">{displayTimer()}</p>
        <button className="image-preview__btn" onClick={()=>handleCurrent("PREV")}>{/*prev*/}<i className="fas fa-backward"></i></button>
        <button className="image-preview__btn" onClick={()=>handleCurrent("PAUSE")}>
          {isPaused?<i className="fas fa-play"></i>:<i className="fas fa-pause"></i>}
        </button>
        <button className="image-preview__btn" onClick={()=>handleCurrent("NEXT")}>{/*next*/}<i className="fas fa-forward"></i></button>
        <button className="image-preview__btn">{/*info*/}<i className="fas fa-info"></i></button>
      </div>
      <img
        src={imageArr[current].urls.regular}
        alt={imageArr[current].alt_description}
        className="image-preview__image"
      />
    <p>
      Image by
      <a href={imageArr[current].user.links.self}> {imageArr[current].user.name} </a>
      on <a href="https://unsplash.com/?utm_source=unsketchy&utm_medium=referral">unplash</a>
    </p>
    </div>
  )
}

export default ImagePreview
