import { Routes, Route } from 'react-router-dom';
import { Home } from "./Pages";
import { Cadastro } from "./Pages/Cadastro/Cadastro";
import { App } from "./App";
import { Login } from './Pages/Login/Login';
import { Flores } from './Pages/Flores/Flores';
import { Ferramentas } from './Pages/Ferramentas/Ferramentas';
import { Plantas } from './Pages/Plantas/Plantas';
import { Perfil } from './Pages/Perfil/Perfil';
import { Amarilis, Azaleia, Camelia, Ciclome, Dalia, Gardenia, Girassol, Helleborus, Hibisco, Lavanda, Lirio, Margarida, Orquidea, Rosa, Tulipa, Violeta } from './Pages';
import { Agave, Barbosa, Cacto, Costela, Espada, Jiboia, Pacova, Peperomia, Samambaia, Zamioculca} from './Pages';
import PrivateRoute from "./PrivateRoute";


const Router = () =>{

return(

   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Cadastro" element={<Cadastro />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Flores" element={<Flores />} />
    <Route path="/Ferramentas" element={<Ferramentas />} />
    <Route path="/Plantas" element={<Plantas />} />
    <Route path="/perfil" element={
            <PrivateRoute>
            <Perfil />
            </PrivateRoute>}/>

      <Route path="/DetPlantaFlor/DetFlor/Amarilis" element={<Amarilis />} />
      <Route path="/DetPlantaFlor/DetFlor/Azaleia" element={<Azaleia />} />
      <Route path="/DetPlantaFlor/DetFlor/Camelia" element={<Camelia />} />
      <Route path="/DetPlantaFlor/DetFlor/Ciclome" element={<Ciclome />} />
      <Route path="/DetPlantaFlor/DetFlor/Dalia" element={<Dalia />} />
      <Route path="/DetPlantaFlor/DetFlor/Gardenia" element={<Gardenia />} />
      <Route path="/DetPlantaFlor/DetFlor/Girassol" element={<Girassol />} />
      <Route path="/DetPlantaFlor/DetFlor/Helleborus" element={<Helleborus />} />
      <Route path="/DetPlantaFlor/DetFlor/Hibisco" element={<Hibisco />} />
      <Route path="/DetPlantaFlor/DetFlor/Lavanda" element={<Lavanda />} />
      <Route path="/DetPlantaFlor/DetFlor/Lirio" element={<Lirio />} />
      <Route path="/DetPlantaFlor/DetFlor/Margarida" element={<Margarida />} />
      <Route path="/DetPlantaFlor/DetFlor/Orquidea" element={<Orquidea />} />
      <Route path="/DetPlantaFlor/DetFlor/Rosa" element={<Rosa />} />
      <Route path="/DetPlantaFlor/DetFlor/Tulipa" element={<Tulipa />} />
      <Route path="/DetPlantaFlor/DetFlor/Violeta" element={<Violeta />} />

      <Route path="/DetPlantaFlor/DetPlanta/Agave" element={<Agave />} />
      <Route path="/DetPlantaFlor/DetPlanta/Barbosa" element={<Barbosa />} />
      <Route path="/DetPlantaFlor/DetPlanta/Cacto" element={<Cacto />} />
      <Route path="/DetPlantaFlor/DetPlanta/Costela" element={<Costela />} />
      <Route path="/DetPlantaFlor/DetPlanta/Espada" element={<Espada />} />
      <Route path="/DetPlantaFlor/DetPlanta/Jiboia" element={<Jiboia />} />
      <Route path="/DetPlantaFlor/DetPlanta/Pacova" element={<Pacova />} />
      <Route path="/DetPlantaFlor/DetPlanta/Peperomia" element={<Peperomia />} />
      <Route path="/DetPlantaFlor/DetPlanta/Samambaia" element={<Samambaia />} />
      <Route path="/DetPlantaFlor/DetPlanta/Zamioculca" element={<Zamioculca />} />

   </Routes>

)

};

export {Router};