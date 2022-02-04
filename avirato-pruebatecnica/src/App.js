import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/header/header.jsx';
import Footer from './component/footer/footer';
import Principal from './pages/principal/principal';
import AltasModificaciones from './pages/altas-modificaciones/altas-modificaciones';
import Details from './pages/detalles/detalles';
import DeleteMessage from './pages/deleteMessage/deleteMessage';
import Mensaje from './pages/mensajeAltaModificacion/mensaje';

function App() {
  return (
    <BrowserRouter>
      <div className='heigth_viewport'>
        <Header></Header>
        <Switch>
          <Route path='/altas'>
            <AltasModificaciones title='Altas' button='Dar de alta'></AltasModificaciones>
          </Route>
          <Route path='/modificaciones/:id'>
          <AltasModificaciones title='Modificaciones' button='Modificar usuario'></AltasModificaciones>
          </Route>
          <Route path='/eliminar'>
            <DeleteMessage></DeleteMessage>
          </Route>
          <Route path='/mensajeAltaModificacion'>
              <Mensaje></Mensaje>
          </Route>
          <Route path='/detalles'>
            <Details></Details>
          </Route>
          <Route path='/'>
            <Principal></Principal>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
