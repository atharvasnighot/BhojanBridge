import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default () => {

  const imageUrls = [
    'https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/241417591_516888582684384_5224211915914241200_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=52f669&_nc_ohc=UPiPobF6_gAAX_v1aPs&_nc_ht=scontent.fnag10-1.fna&oh=00_AfD9gGZeOavCQXBv74DzB3VxnsHAEARBXu8W-LXU4lkvZQ&oe=652BE37A',
    'https://penji.co/wp-content/uploads/2020/10/Dave-CHUYAX.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSoqDaRti61qrt65opWckM6Q0eubQj6Hwg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJAViWqqlXKwRJHPp0LxE0FkK21JTiTOEr3PpiLEfYDSc32Rn_jYJAOeNP6Xlvd3kJZM'
  ];

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
  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl text-black font-mono"> Food currently available </h1>
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
            pagination={true}
            initialSlide={3}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            id='event'
          >
            {imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <a href="/">
                    <img src={url} className="rounded-xl" alt={`Slide ${index + 1}`} />

                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
