import Container from 'react-bootstrap/Container';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router';
//import { Header } from './Header';
import { NavBarre } from './NavBarre';
import { Footer } from './Footer';
import { Page404 } from './pages/Page404';

import { HomePage } from './pages/home/homePage'; 
import { SketchsPage } from './pages/sketchs/SketchsPage';
import { TattoosPage } from './pages/tattoos/TattoosPages';
import { LinksPage } from './pages/links/LinksPage';
import "./styles.css";


export function App() {

  return (  
      <BrowserRouter>
        <NavBarre />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Page404 />} />
            <Route path="pages/sketchs" element={<SketchsPage />} />
            <Route path="pages/tattoos" element={<TattoosPage />} />
            <Route path="pages/links" element={<LinksPage />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
  );
}
// Reste Auth0 à ajouter
