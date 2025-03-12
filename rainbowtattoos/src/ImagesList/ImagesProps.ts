interface image {
    id: number
    imageName: string;
} 

export interface ImagesProps {
    imagesList: image[]; 
    imgType: string;
    txtColor: string;
}
