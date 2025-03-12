import { Links } from './Links';  
import { PageTemplate } from '../../PageTemplate';

export function LinksPage() {
  return (
    <PageTemplate 
      title="Liens" 
      previous="/pages/tattoos" 
      nextPage="/pages/sketchs" 
      bgImageClass="bg-link"
      txtColor="red"
    >
      {<Links />}
    </PageTemplate>
  );
}