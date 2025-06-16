"use client";
import dynamic from 'next/dynamic';
import { QuestionsItemProps } from '@/shared/types/types';

export const LazyQuestionsItem = dynamic<QuestionsItemProps>(
  () => import('../QuestionsItem/QuestionsItem').then((mod) => mod.QuestionsItem),
  {
    ssr: false,
    loading: () => <div>Загрузка...</div>,
  }
);