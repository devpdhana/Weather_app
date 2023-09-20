import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Components/Home'
import Axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  const KEY = 'e94352c433b5bb5c101c9448a6d04c6d'

  const [cityName,setCityName] = useState('')
  const [data,setData] = useState()

  const fetchData = async()=>{
    try{
      const data = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}`)
      setData(data.data)
      console.log(data)
    }catch(err){
      alert(err)
    }
  }

  return (
    // <Container className="mt-5 p-2">
    <div>
      <Header 
      title = "Find My Weather"/>
      <Home
        fetchData={fetchData}
        cityName={cityName}
        setCityName={setCityName}
        data={data}
      />
      <Footer />
    </div>
    // </Container>
  );
}

export default App
