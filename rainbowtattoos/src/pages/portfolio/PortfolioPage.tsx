import { Portfolio } from './Portfolio';  
import { PageTemplate } from '../../PageTemplate';

export function PortfolioPage() {
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