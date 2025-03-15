import { ImagesProps } from "./ImagesProps"; 

export function ImageListing({ imagesList, imgType, txtColor }: ImagesProps) {
  const path: string = "../images/";
  return (
    <div className='m-5' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {imagesList.map((image) => (
        <div key={image.id} style={{ textAlign: 'center', margin: '20px', flexBasis: '45%' }}>
          <h2 style={{ color: txtColor }}>{imgType}# {image.id}</h2>
          <img 
            src={path + image.imageName} 
            alt={`Sketch ${image.id}`} 
            style={{ width: '60%', height: 'auto', marginBottom: '30px' }}
            loading={image.id === 4 ? 'lazy' : undefined}
            className="img-blur-border"
          />
        </div>
      ))}
    </div>
  );
};
