import { SubmitConfirm } from './SubmitConfirm';  
import { PageTemplate } from '../../PageTemplate';
import { JSX } from 'react';

export function SubmitConfirmPage(): JSX.Element {
  return (
    <PageTemplate 
      previous="/" 
      nextPage="/" 
      bgImageClass="bg-link"
      txtColor="beige"
      isSpecialPage={true}
    >
      {<SubmitConfirm />}
    </PageTemplate>
  );
}