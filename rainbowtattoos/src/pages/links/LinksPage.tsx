import { Links } from './Links';  
import { PageTemplate } from '../../PageTemplate';

export function LinksPage() {
  return (
    <PageTemplate 
      title="Nous rejoindres" 
      previous="/pages/tattoos" 
      nextPage="/pages/sketchs" 
      bgImageClass="bg-link"
      txtColor="red"
    >
      {<Links />}
    </PageTemplate>
  );
}
