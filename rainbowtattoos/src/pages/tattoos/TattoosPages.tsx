import { Tattoos } from './Tattoos';  
import { PageTemplate } from '../../PageTemplate';

export function TattoosPage() {
  return (
    <PageTemplate 
      title="Tattoos réalisés" 
      previous="/pages/sketchs" 
      nextPage="/pages/links" 
      bgImageClass="bg-tattoo"
      txtColor='white'
    >
      {<Tattoos />}
    </PageTemplate>
  );
}