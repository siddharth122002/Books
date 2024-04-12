import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Show from './components/Show'
import Edit from './components/Edit'
import Delete from './components/Delete'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books/create' element={<Create/>}/>
        <Route path='/books/details/:id' element={<Show/>}/>
        <Route path='/books/edit/:id' element={<Edit/>}/>
        <Route path='/books/delete/:id' element={<Delete/>}/>
      </Routes>
    </Router>
  )
}

export default App
