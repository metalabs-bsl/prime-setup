/* eslint-disable */
'use client';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ReviewSwiper.module.scss';
import mobile from './ReviewSwiperMobile.module.scss';
import { ReviewSwiperProps } from '@/shared/types/types';

export const ReviewSwiper: React.FC<ReviewSwiperProps> = ({ reviews }) => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      paginationRef.current &&
      swiperRef.current.pagination
    ) {
      swiperRef.current.params.pagination.el = paginationRef.current;
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
    }
  }, []);

  return (
    <div className={`${styles.slider__wrapper} ${mobile.slider__wrapper}`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={`${styles.my__swiper} ${mobile.my__swiper}`}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className={`${styles.content__slide} ${mobile.content__slide}`}>
              <div className={`${styles.content__up} ${mobile.content__up}`}>
                <Image
                  className={`${styles.content__img} ${mobile.content__img}`}
                  alt="Swiper Avatar"
                  src={review.image}
                  width={120}
                  height={120}
                />
                <h4 className={`${styles.content__title} ${mobile.content__title}`}>
                  {review.title}
                </h4>
              </div>
              <div className={`${styles.content__stars} ${mobile.content__stars}`}>
                {[...Array(review.stars || 5)].map((_, i) => (
                  <Image
                    key={i}
                    className={`${styles.content__star} ${mobile.content__star}`}
                    alt="Swiper Star"
                    src="/assets/icons/Star.svg"
                    width={53}
                    height={49}
                  />
                ))}
              </div>
              <div className={`${styles.content__review} ${mobile.content__review}`}>
                <p className={`${styles.content__text} ${mobile.content__text}`}>
                  {review.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={paginationRef}
        className={`${styles.swiper__pagination} ${mobile.swiper__pagination}`}
      />
    </div>
  );
};
