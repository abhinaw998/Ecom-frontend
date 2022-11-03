import { Carousel } from "react-bootstrap";
import { useState } from "react";
import image1 from '../../images/carousel/carousel-1.png'
import image2 from '../../images/carousel/carousel-2.png'
import image3 from '../../images/carousel/carousel-3.png'
const ProductCarouselComponent = () => {
  const [index, setIndex] = useState(0);
  let imageList=[image1, image2, image3]
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="slide" activeIndex={index} onSelect={handleSelect}>
      {imageList.map((image, ind)=>{
        return <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt={`${ind}image`}
        />
        <Carousel.Caption>
          <h3>slide label {ind}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      })}
    </Carousel>
  );
};

export default ProductCarouselComponent;
