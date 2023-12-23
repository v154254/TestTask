import { useState } from 'react';

function Slider({ ...props }) {
  const images = props.images;
  const maxImages = images.length - 1;
  const [currentImage, setCurrentImage] = useState(0);

  function previousImage() {
    if (currentImage === 0) {
      setCurrentImage(maxImages);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }
  function nextImage() {
    if (currentImage === maxImages) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }
  return (
    <div>
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentImage]} alt="product image" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default Slider;
