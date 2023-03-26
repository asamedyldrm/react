function ImageItem({image}) {
    console.log(image)
  return <div className="imageDiv">
    <a href="{https://unsplash.com/documentation#search-photos}"><img className="images" src={image.urls.small} alt={image.alt_description} /></a >
    <p className="imagesText">{image.alt_description}</p>
  </div>
}

export default ImageItem;
