import { useEffect } from 'react';

import { Sketchs } from './Sketchs';  
import { PageTemplate } from '../../PageTemplate';

export function SketchsPage() {
  useEffect(() => {
    document.body.classList.add("bg-sketch");
    
    return () => {
      document.body.classList.remove("bg-sketch"); 
    };
  }, []);

  return (
    <div className=''>
      <PageTemplate title="Croquis" previous="/pages/links" nextPage="/pages/tattoos">
        {<Sketchs />}
      </PageTemplate>
    </div>
  );
}