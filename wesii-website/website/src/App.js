import './App.scss';
import Menu from './Components/Menu'
import Banner from './Components/Banner'
import Service from './Components/Service';
import Wesii from './Components/Wesii';
import Contatta from './Components/Contatta';
import Copyright from './Components/Copyright';
import Arrivando from './Components/Arrivando'
import { useState } from 'react';
function App() {
  const [isOpen,setIsopen]=useState(true)
  const clickEvent =()=>{
    isOpen?setIsopen(false):setIsopen(true)
  }
  return (
    <div>
      <Menu clickEvent={clickEvent}/>
      {isOpen && <Banner clickEvent={clickEvent}/>}
      {!isOpen && <Arrivando />}
      <Service />
      <Wesii />
      <Contatta />
      <Copyright />
    </div>
  );
}

export default App;
