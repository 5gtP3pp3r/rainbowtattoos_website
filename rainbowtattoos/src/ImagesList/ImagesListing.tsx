import { JSX } from "react";
import { ImagesProps } from "./ImagesProps"; 

export function ImageListing({ imagesList, txtColor, imgPath }: ImagesProps): JSX.Element {
  return (    
    <div className='' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {imagesList.map((image) => (
        <div key={image.id} style={{ textAlign: 'center', margin: '20px', flexBasis: '45%' }}>
          <p style={{ color: txtColor }}>
            #{image.id}
          </p>
          <img 
            src={imgPath + image.imageName} 
            alt={`Sketch ${image.id}`} 
            style={{ width: '70%', minWidth: '300px', height: 'auto', marginBottom: '30px' }}
            loading={image.id === 4 ? 'lazy' : undefined}
            className="img-blur-border"
          />
        </div>
      ))}
    </div>
  );
};
