import { JSX } from "react";
import { Link } from 'react-router-dom';


export function Page404(): JSX.Element {
    return (
        <div>
            <h1>Oups, erreur 404, page introuvable! XD</h1>
            <p>Placer une belle image au lieu d'un texte poche... </p>
            <Link to="/" >Retour à l'accueil</Link>
        </div>
        
    )
}