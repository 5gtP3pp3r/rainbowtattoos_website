import { Portfolio } from './Portfolio';  
import { PageTemplate } from '../../PageTemplate';
import { JSX } from 'react';

export function PortfolioPage(): JSX.Element {
  return (
    <PageTemplate 
      previous="/" 
      nextPage="/pages/contacts" 
      bgImageClass="bg-sketch"
      txtColor='beige'
    >
      {<Portfolio />}
    </PageTemplate>
  );
}