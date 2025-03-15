import { JSX } from 'react';
import { Tattoos } from './Tattoos';  
import { PageTemplate } from '../../PageTemplate';

export function TattoosPage(): JSX.Element {
  return (
    <PageTemplate  
      previous="/pages/******" 
      nextPage="/pages/******" 
      bgImageClass="bg-tattoo"
      txtColor='beige'
    >
      {<Tattoos />}
    </PageTemplate>
  );
}