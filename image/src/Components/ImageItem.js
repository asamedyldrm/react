function ImageItem({image}) {
    console.log(image)
  return <div className="p-2 rounded-2xl bg-gray-300 m-1">
    <img className="w-25" src={image.urls.small} alt={image.alt_description} />
    <p className="">{image.alt_description}</p>
  </div>
}

export default ImageItem;
