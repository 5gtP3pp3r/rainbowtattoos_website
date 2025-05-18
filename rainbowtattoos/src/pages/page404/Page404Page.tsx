import { Page404 } from './Page404';  
import { PageTemplate } from '../../PageTemplate';
import { JSX } from 'react';

export function Page404Page(): JSX.Element {
  return (
    <PageTemplate 
      previous="/" 
      nextPage="/" 
      bgImageClass="bg-home"
      txtColor='beige'
    >
      {<Page404 />}
    </PageTemplate>
  );
}