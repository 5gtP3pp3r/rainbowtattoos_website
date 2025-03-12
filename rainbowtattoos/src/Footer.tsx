import 'bootstrap/dist/css/bootstrap.min.css';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';


export function Footer() {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center mb-1 "/*fixed-bottom*/>    
            <ButtonGroup aria-label="Bouton liens exercicesrang1">
                <div>                             
                    <Button variant='secondary' onClick={() => navigate("/pages/sketchs")} className="rounded-end-0" style={{width:106}}><strong>Croquis</strong></Button>
                    <Button variant='secondary' onClick={() => navigate("/pages/tattoos")} className="rounded-0" style={{width:106}}><strong>Tattoos</strong></Button>
                    <Button variant='secondary' onClick={() => navigate("/pages/links")} className="rounded-start-0" style={{width:106}}><strong>Liens</strong></Button>                               
                </div>                 
            </ButtonGroup>       
        </div>
    );
}