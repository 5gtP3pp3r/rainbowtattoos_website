import { Sketchs } from './Sketchs';  
import { PageTemplate } from '../../PageTemplate';

export function SketchsPage() {
  return (
    <PageTemplate 
      previous="/" 
      nextPage="/pages/links" 
      bgImageClass="bg-sketch"
      txtColor='beige'
    >
      {<Sketchs />}
    </PageTemplate>
  );
}