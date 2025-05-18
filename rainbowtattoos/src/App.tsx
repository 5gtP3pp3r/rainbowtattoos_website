import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router';
import "./styles.css";
import { JSX } from 'react';
import { NavBarre } from './NavBarre';
import { Footer } from './Footer';
import { ScrollToTop } from "./ScrollToTop";
import { HomePage } from './pages/home/HomePage'; 
import { PortfolioPage } from './pages/portfolio/PortfolioPage';
//import { TattoosPage } from './pages/tattoos/TattoosPages';
import { ContactsPage } from './pages/contacts/ContactsPage';
import { SubmitConfirmPage } from './pages/submitConfirm/SubmitConfirmPage';
import { Page404Page } from './pages/page404/Page404Page';




export function App(): JSX.Element {

  return (  
      <BrowserRouter>
      <ScrollToTop />
        <NavBarre />        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Page404Page />} />
            <Route path="pages/portfolio" element={<PortfolioPage />} />
            {/*<Route path="pages/tattoos" element={<TattoosPage />} />*/}
            <Route path="pages/contacts" element={<ContactsPage />} />
            <Route path="pages/submitConfirm" element={<SubmitConfirmPage />} />
          </Routes>        
        <Footer />
      </BrowserRouter>
  );
}
