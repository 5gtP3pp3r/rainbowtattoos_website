import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router';
import { NavBarre } from './NavBarre';
import { Footer } from './Footer';
import { Page404 } from './pages/Page404';

import { ScrollToTop } from "./ScrollToTop";
import { HomePage } from './pages/home/homePage'; 
import { SketchsPage } from './pages/sketchs/SketchsPage';
//import { TattoosPage } from './pages/tattoos/TattoosPages';
import { LinksPage } from './pages/links/LinksPage';
import "./styles.css";


export function App() {

  return (  
      <BrowserRouter>
      <ScrollToTop />
        <NavBarre />        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Page404 />} />
            <Route path="pages/sketchs" element={<SketchsPage />} />
            {/*<Route path="pages/tattoos" element={<TattoosPage />} />*/}
            <Route path="pages/links" element={<LinksPage />} />
          </Routes>        
        <Footer />
      </BrowserRouter>
  );
}
