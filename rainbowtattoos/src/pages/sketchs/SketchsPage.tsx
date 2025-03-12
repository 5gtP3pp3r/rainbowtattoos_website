import { Sketchs } from './Sketchs';  
import { PageTemplate } from '../../PageTemplate';

export function SketchsPage() {
  return (
    <PageTemplate 
      title="Croquis" 
      previous="/" 
      nextPage="/pages/tattoos" 
      bgImageClass="bg-sketch"
      txtColor='white'
    >
      {<Sketchs />}
    </PageTemplate>
  );
}