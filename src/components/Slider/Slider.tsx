import { useEffect, useState } from 'react';
import classes from './Slider.module.css';

function Slider({ ...props }) {
  const images = props.images;
  const maxImages = images.length - 1;
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  function previousImage() {
    if (currentImage === 0) {
      setCurrentImage(maxImages);
    } else {
      setCurrentImage(currentImage - 1);
    }
    setLoaded(false);
  }
  function nextImage() {
    if (currentImage === maxImages) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
    setLoaded(false);
  }

  useEffect(() => {
    setLoaded(false);
    setCurrentImage(0);
  }, [props.images]);

  return (
    <div className={classes.container}>
      <button onClick={previousImage}>Previous</button>
      {loaded ? null : <p>Идёт загрузка, подождите...</p>}
      <img
        style={loaded ? {} : { display: 'none' }}
        onLoad={() => setLoaded(true)}
        width="300px"
        height="400px"
        src={images[currentImage]}
        alt="product image"
      />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default Slider;
