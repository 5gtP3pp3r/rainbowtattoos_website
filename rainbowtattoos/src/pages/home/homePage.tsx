import { Home } from './Home'
import { PageTemplate } from '../../PageTemplate';

export function HomePage() {
  return (
    <PageTemplate 
      previous="/pages/links" 
      nextPage="/pages/sketchs" 
      bgImageClass="bg-home"
      txtColor='beige'
    >
      {<Home />}
    </PageTemplate>
  );
}