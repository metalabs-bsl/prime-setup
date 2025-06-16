"use client";
import dynamic from 'next/dynamic';

export const LazyReviewSwiper = dynamic(
  () => import('../ReviewSwiper/ReviewSwiper').then((mod) => mod.ReviewSwiper),
  {
    ssr: false,
    loading: () => <div>Загрузка отзывов...</div>,
  }
);
