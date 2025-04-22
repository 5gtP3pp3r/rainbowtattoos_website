interface image {
    id: number
    imageName: string;
} 

export interface ImagesProps {
    imagesList: image[]; 
    //txtColor: string;
    imgPath: string;
}
