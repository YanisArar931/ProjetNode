import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Home from "./pages/Home.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Header from "./components/Header.jsx";

function App() {

  return (
    <>
        <div className="container-fluid vh-100">
            <div className="row">
                <Header />
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/books/:id" element={<BookDetails/>}/>
            </Routes>
        </div>
    </>
  )
}

export default App
