import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceHolder }) {
  return  (
  <div  className="columns-3 flex flex-wrap">
    {imagesPlaceHolder.map((image, index) => {
      return <ImageItem key = {index} image={image} />;
    })}
  </div>
  )
}

export default ImageList;
