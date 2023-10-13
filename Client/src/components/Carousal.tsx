import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default () => {
  const [array, setArray] = useState([])
  const [feedCount, setFeedCount] = useState(0); // Initialize feed count
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Initialize current slide index

  useEffect(() => {
    axios.get('http://localhost:8080/provider/all-current').then(res => setArray(res.data))
  } ,[])
  
  const imageUrls = [
    'https://b.zmtcdn.com/data/pictures/1/3301331/b63ef523c6c5a95a0d20a70e616dbd32.jpg',
    'https://etvbharatimages.akamaized.net/etvbharat/prod-images/01-07-2023/1200-675-18887791-thumbnail-16x9-biryani-aspera.jpg',
    'https://allchickenrecipe.com/wp-content/uploads/2020/05/Chicken-Momos.jpg',
    'https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg'
  ];

  const pagination = {
    clickable: true,
    renderBullet: function(index, className) {
      return '';
    },
  };

  const cssStyles = `
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 600px; /* Increased width */
    height: 400px; /* Increased height */
    border-radius: 20px; 
    border: 2px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }

  .swiper-pagination-bullet {
    background: #0ddcba; /* Change the pagination bullet color */
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #f2f5f2; /* Change the active pagination bullet color */
    opacity: 1;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  
  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
  
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }
  
  @media (max-width: 767px) {
    .swiper-slide {
      width: 350px;
      height: 225px;
    }
  }
  
  .card {
    padding: 2em;
  }
  
  .read-the-docs {
    color: #888;
  }
  
 `;

 const handleSlideChange = (swiper) => {
  // Get the active slide index and update feed count based on your logic
  const activeSlideIndex = swiper.activeIndex;
  // For example, you can set the feed count based on the active slide index
  
  setFeedCount(Math.floor(Math.random() * 100) + 1);
  setCurrentSlideIndex(activeSlideIndex);
};

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl text-black font-sans"> Food currently available </h1>
        <div id="events">
          <style>{cssStyles}</style>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={pagination}
            initialSlide={3}
            modules={[Pagination]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            id='event'
          >
            {imageUrls.map((el, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <a href="/">
                    <img src={el} className="rounded-xl" alt={`Slide ${index + 1}`} />
                  
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container mx-auto flex justify-center p-6">
        <h1 className="text-2xl text-black font-mono font-bold">Estimated feed Count: {feedCount} people</h1>
      </div>
    </>
  )
}
