import Slider from 'react-slick'
import './style.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { Card } from '../Card'
import { ProductsProps } from '../../types'
import { ClassAttributes, HTMLAttributes, useContext } from 'react'
import { JSX } from 'react/jsx-runtime'
import { CartContext } from '../../context/CartContext'

interface ProductListProps {
  listProductsData: ProductsProps[]
}

export const Carousel = ({ listProductsData }: ProductListProps) => {
  const { addProductToCart } = useContext(CartContext)
  const handleBuyClick = (productId: ProductsProps) => {
    addProductToCart(productId)
  }

  const CustomPrevArrow = (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLDivElement> &
      HTMLAttributes<HTMLDivElement>,
  ) => (
    <div {...props} className="custom-arrow custom-prev-arrow">
      <IoIosArrowBack />
    </div>
  )

  const CustomNextArrow = (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLDivElement> &
      HTMLAttributes<HTMLDivElement>,
  ) => (
    <div {...props} className="custom-arrow custom-next-arrow">
      <IoIosArrowForward />
    </div>
  )
  const settings = {
    dots: false,
    speed: 300,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    pagination: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="wrapper">
      <Slider className="slider" {...settings}>
        {listProductsData.map((product) => (
          <Card
            key={product._id}
            product={product}
            onBuyClick={handleBuyClick}
          />
        ))}
      </Slider>
    </div>
  )
}
