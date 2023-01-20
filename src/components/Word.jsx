import { useParams } from "react-router-dom"

function Word() {
    const { word } = useParams();
    return (
        isNaN(word) ?
            <div className="card mt-3">
                <div className="card-body">
                    <h1>The word is: {word}</h1>
                </div>
            </div> :
            <div className="card mt-3">
                <div className="card-body">
                    <h1>The number is: {word}</h1>
                </div>
            </div>
    )
}

export default Word