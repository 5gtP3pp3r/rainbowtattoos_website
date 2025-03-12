import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"; /*<MdOutlineKeyboardDoubleArrowRight />*/
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";  /*<MdOutlineKeyboardDoubleArrowLeft />*/

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
  previous: string;
  nextPage: string;
}

export function PageTemplate({ title, children, previous, nextPage }: PageTemplateProps) {
  const navigate = useNavigate();

  return (
    <div >
      <h3>{title}</h3>
      <div style={{minHeight: '285px'}}>{children}</div>
      <div className="d-flex justify-content-center gap-5 mb-5 pb-5">        
            <Button
                onClick={() => navigate(previous)}
                variant='secondary'
                style={{width:50}}
            >
            <><MdOutlineKeyboardDoubleArrowLeft /></>
            </Button>
            <Button
                onClick={() => navigate(nextPage)}
                variant='secondary'
                style={{width:50}}
            >
            <><MdOutlineKeyboardDoubleArrowRight /></>
            </Button>                
      </div>
    </div>
  );
}
