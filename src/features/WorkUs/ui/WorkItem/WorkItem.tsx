import styles from './WorkItem.module.scss'
import mobile from './WorkItemMobile.module.scss'
import Image from 'next/image'
import { WorkItemProps } from '@/shared/types/types'

export const WorkItem: React.FC<WorkItemProps> = ({ imgSrc, imgAlt = 'Item Work', imgWidth, imgHeight, title, text }) => {
    return (
        <div className={`${styles.item} ${mobile.item}`}>
            <Image
                className={`${styles.item__img} ${mobile.item__img}`}
                src={imgSrc}
                alt={imgAlt}
                width={imgWidth}
                height={imgHeight}
            />
            <h4 className={`${styles.item__title} ${mobile.item__title}`}>{title}</h4>
            <p className={`${styles.item__text} ${mobile.item__text}`}>{text}</p>
        </div>
    )
}