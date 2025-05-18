import { JSX } from 'react';
import { Link } from 'react-router-dom';


export function SubmitConfirm(): JSX.Element {
    return (
        <div>
            <p className='main-text'>Ajouter une belle image avec un message merci on va contacter dans moins de 48 heures</p>
            <Link to="/" >Retour à l'accueil... faire un plus beau lien de retour, ou pas le nav est là!</Link>
        </div>
    )
}