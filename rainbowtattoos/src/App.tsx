import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router';
import "./styles.css";
import { JSX } from 'react';
import { NavBarre } from './NavBarre';
import { Footer } from './Footer';
import { Page404 } from './pages/Page404';

import { ScrollToTop } from "./ScrollToTop";
import { HomePage } from './pages/home/homePage'; 
import { PortfolioPage } from './pages/portfolio/PortfolioPage';
//import { TattoosPage } from './pages/tattoos/TattoosPages';
import { ContactsPage } from './pages/contacts/ContactsPage';




export function App(): JSX.Element {

  return (  
      <BrowserRouter>
      <ScrollToTop />
        <NavBarre />        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Page404 />} />
            <Route path="pages/portfolio" element={<PortfolioPage />} />
            {/*<Route path="pages/tattoos" element={<TattoosPage />} />*/}
            <Route path="pages/contacts" element={<ContactsPage />} />
          </Routes>        
        <Footer />
      </BrowserRouter>
  );
}
