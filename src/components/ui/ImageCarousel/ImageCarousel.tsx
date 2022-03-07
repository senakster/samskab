import React from 'react';
import styles from './ImageCarousel.module.scss';

const ImageCarousel: React.FC<{
  images: {id: string;url: string;}[],
  interval?: number;
  variant?: string;
}> = ({images, interval, variant}) => {

  const [active, setActive] = React.useState<number>(Math.floor(Math.random() * images.length))
  
  function auto_rotate() {
    const newVal = (active + images.length + Math.floor(Math.random()*images.length)) % images.length || 0 
    setActive(newVal)
  }
  React.useEffect(() => {
    const rotation = setInterval(auto_rotate, interval || 5000)
    return () => {
      clearInterval(rotation)
    }
  })

  return (
  <>
  <div 
  className={`${styles.ImageCarousel} ${variant ? styles[variant] : ''}`} 
  style={{'--interval': interval} as React.CSSProperties}
  data-testid="ImageCarousel">
    {images?.map && images.map((img, i) => 
      <img key={i} className={`${i === active ? styles.active: ''}`} src={`${img.url.replace('%PUBLIC_URL%',`${process.env.PUBLIC_URL}`)}`} alt={img.id} loading="lazy"/>
    )}
  </div>
  </>
);
}

export default ImageCarousel;
