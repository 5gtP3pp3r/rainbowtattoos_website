import { Links } from './Links';  
import { PageTemplate } from '../../PageTemplate';

export function LinksPage() {
  return (
    <PageTemplate 
      previous="/pages/sketchs" 
      nextPage="/" 
      bgImageClass="bg-link"
      txtColor="beige"
    >
      {<Links />}
    </PageTemplate>
  );
}
