import { Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";

function App() {
 

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/">Home</Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
