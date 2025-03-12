import { useEffect } from 'react';

import { Tattoos } from './Tattoos';  
import { PageTemplate } from '../../PageTemplate';

export function TattoosPage() {
  useEffect(() => {
    document.body.classList.add("bg-tattoo");
    
    return () => {
      document.body.classList.remove("bg-tattoo"); 
    };
  }, []);

  return (
    <PageTemplate title="Tattoos" previous="/pages/sketchs" nextPage="/pages/links">
      {<Tattoos />}
    </PageTemplate>
  );
}