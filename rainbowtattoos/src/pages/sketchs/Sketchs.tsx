import { ImageListing } from '../../ImagesList/ImagesListing';  
import { ImagesProps } from '../../ImagesList/ImagesProps'; 

const sketchsList: ImagesProps['imagesList'] = [
  { id: 1, imageName: 'bunny_guy.png' },
  { id: 2, imageName: 'cat_banner.jpg' },
  { id: 3, imageName: 'flash_flowers.png' },
  { id: 4, imageName: 'sketch_1.jpg' },
  { id: 5, imageName: 'sketch_2.jpg' },
];

export function Sketchs(){
    const imgType: string = "Croquis";
    const color: string = "white";
    return (
        <div>
            <ImageListing imagesList={sketchsList} imgType={imgType} txtColor={color} />
        </div>
    )
}