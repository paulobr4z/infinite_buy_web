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
  slidesToShow: number
}

export const Carousel = ({
  listProductsData,
  slidesToShow
}: ProductListProps) => {
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
    infinite: true,
    speed: 300,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,
    slidesToShow,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
