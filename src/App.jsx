import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./components/Home"
import Word from "./components/Word"
import Color from "./components/Color"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:color1/:color2?" element={<Color />} />
      </Routes>
    </div>
  )
}

export default App