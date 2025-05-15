import { BrowserRouter,Routes,Route } from "react-router-dom"

import Header from "./components/header"
import Home from "./pages/home"
import NotFound from "./pages/notFound";
import type { FC } from "react";

const App = () => {
  return (
   <BrowserRouter>
   <div className="min-h-screen text-white"> 
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFound />} />
   </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
