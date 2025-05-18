import 'bootstrap/dist/css/bootstrap.min.css';
import React, { JSX } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbArrowBigLeftLines } from "react-icons/tb";   
import { TbArrowBigRightLines } from "react-icons/tb";  
import { TbArrowBigUpLines } from "react-icons/tb";     

interface PageTemplateProps {
  children: React.ReactNode;
  previous: string;
  nextPage: string;
  bgImageClass: string;
  txtColor: string;
  isSpecialPage?: boolean;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function PageTemplate({ children, previous, nextPage, bgImageClass, txtColor, isSpecialPage }: PageTemplateProps) : JSX.Element {
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
            <h2 className='me-5'>
              <TbArrowBigLeftLines
                onClick={() => navigate(previous)}   
                onMouseOver={(e) => e.currentTarget.style.cursor = 'pointer'}            
                color={txtColor}
              />
            </h2>     
            <h2>
              <TbArrowBigUpLines 
              onClick={() => isSpecialPage ? navigate('/') : scrollToTop()}   
              onMouseOver={(e) => e.currentTarget.style.cursor = 'pointer'}            
              color={txtColor}
            />              
            </h2>       
            <h2 className='ms-5'>
              <TbArrowBigRightLines
                onClick={() => navigate(nextPage)}   
                onMouseOver={(e) => e.currentTarget.style.cursor = 'pointer'}            
                color={txtColor}
              />
            </h2>               
      </div>
    </>
  );
}
