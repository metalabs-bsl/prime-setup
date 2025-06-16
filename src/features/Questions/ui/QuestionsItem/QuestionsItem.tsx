"use client"
import { useState } from 'react'
import styles from './QuestionsItem.module.scss'
import mobile from './QuestionsItemMobile.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { QuestionsItemProps } from '@/shared/types/types'

export const QuestionsItem: React.FC<QuestionsItemProps> = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`${styles.item} ${mobile.item}`}>
            <div className={`${styles.item__box} ${mobile.item__box}`}>
                <div className={`${styles.item__left} ${mobile.item__left}`}>
                    <h3 className={`${styles.item__question} ${mobile.item__question}`}>{question}</h3>
                </div>
                <div onClick={() => setIsOpen(prev => !prev)} className={`${styles.item__right} ${mobile.item__right}`}>
                    <motion.img
                      className={`${styles.item__arrow} ${mobile.item__arrow}`}
                      src='/assets/icons/Arrow.svg'
                      alt='Arrow'
                      width={21}
                      height={13}
                      animate={{ rotate: isOpen ? -180 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.img
                      className={`${styles.item__arrow2} ${mobile.item__arrow2}`}
                      src='/assets/icons/Arrow2.svg'
                      alt='Arrow'
                      width={21}
                      height={13}
                      animate={{ rotate: isOpen ? -180 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  layout
                  className={`${styles.content} ${mobile.content}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className={`${styles.content__text} ${mobile.content__text}`}>{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
    )
}
