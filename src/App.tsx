import { BrowserRouter,Routes,Route } from "react-router-dom"

import Header from "./components/header"
import Home from "./pages/home"

const App = () => {
  return (
   <BrowserRouter>
   <div className="min-h-screen text-white"> 
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    
   </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
