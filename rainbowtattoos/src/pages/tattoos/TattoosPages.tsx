import { Tattoos } from './Tattoos';  
import { PageTemplate } from '../../PageTemplate';

export function TattoosPage() {
  return (
    <PageTemplate  
      previous="/pages/******" 
      nextPage="/pages/******" 
      bgImageClass="bg-tattoo"
      txtColor='beige'
    >
      {<Tattoos />}
    </PageTemplate>
  );
}