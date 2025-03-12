import { ImagesProps } from "./ImagesProps"; 

export function ImageListing({ imagesList, imgType, txtColor }: ImagesProps) {
  const path: string = "../images/";
  return (
    <div style={{alignItems: 'center', justifyContent: 'center'}}>
      {imagesList.map((image) => (
        <div key={image.id} style={{ textAlign: 'center', margin: '10px 0' }}>
          <h2 style={{ color: txtColor }}>{imgType}# {image.id}</h2>
          <img 
            src={path + image.imageName} 
            alt={`Sketch ${image.id}`} 
            style={{ width: '500px', height: 'auto', marginBottom: '10px'}}
            loading={image.id === 4 ? 'lazy' : undefined}
            className="img-blur-border"
          />
        </div>
      ))}
    </div>
  );
};
