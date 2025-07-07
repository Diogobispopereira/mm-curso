import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Home } from './Componentes/LinkRouter/Rotas/Home'
import { Links } from './Componentes/LinkRouter/Links'
import { QuemSomos } from './Componentes/LinkRouter/Rotas/QuemSomos'
import { CursoIngles } from './Componentes/PaginaInicial/Curso/CursoIngles'
import { CursoEspanhol } from './Componentes/PaginaInicial/Curso/CursoEspanhol'
import { Contato } from './Componentes/LinkRouter/Rotas/Contato'
import { Rodape } from './Componentes/PaginaInicial/Rodape/rodape'

function App() {

  return (
    <BrowserRouter>
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemSomos" element={<QuemSomos/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/ingles" element={<CursoIngles/>} />
        <Route path="/Espanhol" element={<CursoEspanhol/>} />
      </Routes>
     <Rodape/>
    </BrowserRouter>
  )
}

export default App
