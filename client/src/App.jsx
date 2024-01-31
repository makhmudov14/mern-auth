import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import SignIn from "./pages/signin"
import SignUp from "./pages/signup"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/sign-in" element={<SignIn/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}
