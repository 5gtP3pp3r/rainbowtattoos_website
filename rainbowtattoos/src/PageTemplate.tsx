import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"; /*<MdOutlineKeyboardDoubleArrowRight />*/
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";  /*<MdOutlineKeyboardDoubleArrowLeft />*/

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
  previous: string;
  nextPage: string;
  bgImageClass: string;
  txtColor: string
}

export function PageTemplate({ title, children, previous, nextPage, bgImageClass, txtColor }: PageTemplateProps) {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(bgImageClass);
    
    return () => {
      document.body.classList.remove(bgImageClass); 
    };
  }, [bgImageClass]);

  return (
    <div >
      <h1 style={{ color: txtColor }}>{title}</h1>
      <div style={{minHeight: '285px'}}>{children}</div>
      <div className="d-flex justify-content-center gap-5 mt-5 mb-5">        
            <h1>
              <MdOutlineKeyboardDoubleArrowLeft
                onClick={() => navigate(previous)}   
                onMouseOver={(e) => e.currentTarget.style.cursor = 'pointer'}            
                style={{width:50}}
                color={txtColor}
              />
            </h1>
            <h4 style={{ color: txtColor }}>Pages</h4>
            <h1>
              <MdOutlineKeyboardDoubleArrowRight
                onClick={() => navigate(nextPage)}   
                onMouseOver={(e) => e.currentTarget.style.cursor = 'pointer'}            
                style={{width:50}}
                color={txtColor}
              />
            </h1>               
      </div>
    </div>
  );
}
