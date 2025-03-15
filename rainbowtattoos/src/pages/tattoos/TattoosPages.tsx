import { Tattoos } from './Tattoos';  
import { PageTemplate } from '../../PageTemplate';

export function TattoosPage() {
  return (
    <PageTemplate  
      previous="/pages/sketchs" 
      nextPage="/pages/links" 
      bgImageClass="bg-tattoo"
      txtColor='beige'
    >
      {<Tattoos />}
    </PageTemplate>
  );
}