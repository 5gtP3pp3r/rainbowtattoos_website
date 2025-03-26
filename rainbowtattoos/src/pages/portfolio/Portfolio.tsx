import { JSX } from 'react';
import { ImageListing } from '../../ImagesList/ImagesListing';  
import { ImagesProps } from '../../ImagesList/ImagesProps'; 

import { useEffect, useState } from "react";

export function Portfolio(): JSX.Element {
    const [imagesList, setImagesList] = useState<ImagesProps["imagesList"]>([]);
    const color: string = "beige";

    useEffect(() => {
        fetch("/images.json")
            .then((response) => response.json())
            .then((data) => setImagesList(data))
            .catch((error) => console.error("Erreur de chargement:", error));
    }, []);

    return <ImageListing imagesList={imagesList} txtColor={color} />;
}