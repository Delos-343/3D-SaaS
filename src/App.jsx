import { Routes, Route } from "react-router-dom"
import { Home, Intro } from "./pages"

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Intro />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
