import { JSX } from "react";
import { Link } from 'react-router-dom';


export function Page404(): JSX.Element {
    return (
        <div>
            <h1 style={{ color: "beige" }}>Oups, erreur 404, page introuvable! XD</h1>
            <p className='main-text'>Placer une belle image au lieu d'un texte poche... </p>
            <Link to="/" >Retour à l'accueil... faire un plus beau lien de retour, ou pas le nav est là!</Link>
        </div>
        
    )
}