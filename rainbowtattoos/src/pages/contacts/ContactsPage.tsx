import { Contacts } from './Contacts';  
import { PageTemplate } from '../../PageTemplate';

export function ContactsPage() {
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
