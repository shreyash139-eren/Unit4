import {Routes,Route} from "react-router-dom"
import './App.css';
import Feedbacks from "./Feedbacks";
import FeedbackForm from "./FeedbackForm";
import Navbar from "./Navbar";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<FeedbackForm/>}/>
      <Route path="/feedbacks" element={<Feedbacks/>}/>
    </Routes>
    </>
  );
}

export default App;
