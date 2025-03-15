import { JSX } from 'react';
import { Contacts } from './Contacts';  
import { PageTemplate } from '../../PageTemplate';

export function ContactsPage(): JSX.Element {
  return (
    <PageTemplate 
      previous="/pages/portfolio" 
      nextPage="/" 
      bgImageClass="bg-link"
      txtColor="beige"
    >
      {<Contacts />}
    </PageTemplate>
  );
}
