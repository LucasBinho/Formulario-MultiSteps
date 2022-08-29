import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Home } from './pages/Home/Home'
import { RegisterFirstPage } from './pages/Register/Register1'
import { Clients } from './pages/Clients/Clients'
import { UserInfo } from './Context/context'
import { CardClient } from './pages/Clients/CardClient'
import './App.css'


function App() {
  const [arrayOfCards, setArrayOfCards] = useState([]);
  return (
    <div className="App">
      <UserInfo.Provider value={{arrayOfCards, setArrayOfCards}}>
        <BrowserRouter>
        <Sidebar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Register' element={<RegisterFirstPage/>}/>
            <Route path='/Clients' element={<Clients/>}/>
            <Route path='/Client/:id' element={<CardClient/>}/>
          </Routes>
        </BrowserRouter>
      </UserInfo.Provider>
      
    </div>
  )
}

export default App
