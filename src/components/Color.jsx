import { useParams } from "react-router-dom"

function Color() {
  const { word, color1, color2 } = useParams();

  return (
    isNaN(word) ?
      <div className="card mt-3">
        <div className="card-body">
          <h1 style={{color: color1, backgroundColor: color2?color2:''}}>The word is: {word}</h1>
        </div>
      </div> :
      <div className="card mt-3">
        <div className="card-body">
          <h1 style={{color: color1, backgroundColor: color2?color2:''}}>The number is: {word}</h1>
        </div>
      </div>
  )
}

export default Color