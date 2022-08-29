import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Home } from './pages/Home/Home'
import { RegisterFirstPage } from './pages/Register/Register1'
import { Clients } from './pages/Clients/Clients'
import { RegisterSecondPage } from './pages/Register/Register2'
import { RegisterThirdPage } from './pages/Register/Register3'
import { UserInfo } from './Context/context'
import './App.css'


function App() {
  const [userDetailsOne, setUserDetailsOne] = useState({});
  const [userDetailsTwo, setUserDetailsTwo] = useState({});
  const [userDetailsThree, setUserDetailsThree] = useState({});
  const [arrayOfCards, SetArrayOfCards] = useState([]);
  return (
    <div className="App">
      <UserInfo.Provider
       value={{userDetailsOne, setUserDetailsOne, 
       userDetailsTwo, setUserDetailsTwo,
       userDetailsThree, setUserDetailsThree,
       arrayOfCards, SetArrayOfCards}}>
        <BrowserRouter>
        <Sidebar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Register' element={<RegisterFirstPage/>}/>
            <Route path='Register-two' element={<RegisterSecondPage/>}/>
            <Route path='Register-three' element={<RegisterThirdPage/>}/>
            <Route path='/Clients' element={<Clients/>}/>
          </Routes>
        </BrowserRouter>
      </UserInfo.Provider>
      
    </div>
  )
}

export default App
