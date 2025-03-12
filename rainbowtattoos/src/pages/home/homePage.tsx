import { Home } from './Home'
import { PageTemplate } from '../../PageTemplate';

export function HomePage() {
  return (
    <PageTemplate 
      title="Acceuil" 
      previous="/pages/tattoos" 
      nextPage="/pages/sketchs" 
      bgImageClass="bg-home"
      txtColor='white'
    >
      {<Home />}
    </PageTemplate>
  );
}