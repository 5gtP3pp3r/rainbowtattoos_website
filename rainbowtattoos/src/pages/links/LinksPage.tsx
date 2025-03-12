import { useEffect } from 'react';

import { Links } from './Links';  
import { PageTemplate } from '../../PageTemplate';

export function LinksPage() {
  useEffect(() => {
    document.body.classList.add("bg-link");
    
    return () => {
      document.body.classList.remove("bg-link"); 
    };
  }, []);

  return (
    <PageTemplate title="Liens" previous="/pages/tattoos" nextPage="/pages/sketchs">
      {<Links />}
    </PageTemplate>
  );
}