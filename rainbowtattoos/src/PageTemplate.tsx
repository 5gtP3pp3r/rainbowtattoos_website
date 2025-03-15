import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"; /*<MdOutlineKeyboardDoubleArrowRight />*/
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";  /*<MdOutlineKeyboardDoubleArrowLeft />*/

interface PageTemplateProps {
  children: React.ReactNode;
  previous: string;
  nextPage: string;
  bgImageClass: string;
  txtColor: string
}

export function PageTemplate({ children, previous, nextPage, bgImageClass, txtColor }: PageTemplateProps) {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(bgImageClass);
    
    return () => {
      document.body.classList.remove(bgImageClass); 
    };
  }, [bgImageClass]);

  return (
    <>
      <div style={{minHeight: '285px'}}>{children}</div>
      <div className="d-flex justify-content-center gap-5 mt-5 mb-5">        
            <h1 className='me-5'>
              <MdOutlineKeyboardDoubleArrowLeft
                onClick={() => navigate(previous)}   
                onMouseOver={(e) => e.currentTarget.style.cursor = 'pointer'}            
                style={{width:50}}
                color={txtColor}
              />
            </h1>            
            <h1 className='ms-5'>
              <MdOutlineKeyboardDoubleArrowRight
                onClick={() => navigate(nextPage)}   
                onMouseOver={(e) => e.currentTarget.style.cursor = 'pointer'}            
                style={{width:50}}
                color={txtColor}
              />
            </h1>               
      </div>
    </>
  );
}
