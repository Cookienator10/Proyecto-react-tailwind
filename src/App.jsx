import { Routes, Route } from 'react-router-dom'
import {Header} from './componentes/Layouts/Header/Header'
import {Inicio} from './componentes/Pages/Inicio/Inicio'
import {Miportafolio} from './componentes/Pages/Miportafolio/Miportafolio'
import {Contactame} from './componentes/Pages/Contactame/Contactame'
import {Acercademi} from './componentes/Pages/Acercademi/Acercademi'
import {FakeRoutes} from './componentes/Pages/FakeRoutes/FakeRoutes'


function App() {

  return (
    <>
<Header/>
<Routes>
        <Route path='/' element={<Inicio />} />        
        <Route path='/aboutme' element={<Acercademi />} />        
        <Route path='/contactme' element={<Contactame />} />        
        <Route path='/portfolio' element={<Miportafolio />} />        
        <Route path='*' element={<FakeRoutes />} />        
      </Routes>

    </>
  )
}

export default App
