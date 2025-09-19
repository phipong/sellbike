
import Test from './components/Test'
import Mainlayout from './layout/Mainlayout'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
       <BrowserRouter>
         <Mainlayout/>
       </BrowserRouter>
      {/* <Test/>  */}
    

    </>
  )
}

export default App
