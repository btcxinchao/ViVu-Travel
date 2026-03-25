import { useEffect } from "react";
import axios from "axios";
import './App.css'

function App() {

  useEffect(() => {
    axios.get("http://localhost:5000/api")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <h1>
      Test API
    </h1>
  )
}

export default App
