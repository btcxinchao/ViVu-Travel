import { useEffect } from "react";
import axios from "axios";
import './App.css'
import Routers from './routers/routers.jsx'
function App() {

  useEffect(() => {
    axios.get("http://localhost:5000/api")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <Routers></Routers>
  );
}

export default App;
