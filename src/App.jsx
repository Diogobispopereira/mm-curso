import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Home } from './Componentes/LinkRouter/Rotas/Home'
import { Links } from './Componentes/LinkRouter/Links'
import { QuemSomos } from './Componentes/LinkRouter/Rotas/QuemSomos'
import { CursoIngles } from './Componentes/PaginaInicial/Curso/CursoIngles'
import { CursoEspanhol } from './Componentes/PaginaInicial/Curso/CursoEspanhol'

function App() {

  return (
    <BrowserRouter>
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemSomos" element={<QuemSomos/>} />
        <Route path="/ingles" element={<CursoIngles/>} />
        <Route path="/Espanhol" element={<CursoEspanhol/>} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
