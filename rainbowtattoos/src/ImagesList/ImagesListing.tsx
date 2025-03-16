import { JSX } from "react";
import { ImagesProps } from "./ImagesProps"; 

export function ImageListing({ imagesList, txtColor }: ImagesProps): JSX.Element {
  const path: string = "../images/portfolio/";
  return (
    <div className='m-5' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {imagesList.map((image) => (
        <div key={image.id} style={{ textAlign: 'center', margin: '20px', flexBasis: '45%' }}>
          <h2 style={{ color: txtColor }}>
            #{image.id} {image.imageName.split(".")[0]}
          </h2>
          <img 
            src={path + image.imageName} 
            alt={`Sketch ${image.id}`} 
            style={{ width: '60%', minWidth: '300px', height: 'auto', marginBottom: '30px' }}
            loading={image.id === 4 ? 'lazy' : undefined}
            className="img-blur-border"
          />
        </div>
      ))}
    </div>
  );
};
