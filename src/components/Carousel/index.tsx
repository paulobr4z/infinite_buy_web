import Slider from 'react-slick'
import './style.css'
import { ProductsProps } from '../../types'
import { Card } from '../Card'

interface ProductListProps {
  listProductsData: ProductsProps[]
  slidesToShow: number
}

export const Carousel = ({
  listProductsData,
  slidesToShow,
}: ProductListProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1282,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 985,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 704,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider className="slider" {...settings}>
      {listProductsData.map((product) => (
        <Card key={product._id} product={product} onBuyClick={() => {}} />
      ))}
    </Slider>
  )
}
