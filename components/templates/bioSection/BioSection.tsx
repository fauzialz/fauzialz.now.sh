import styles from './BioSection.module.scss'
import Link from 'next/link'
import { ReactNode } from 'react'

interface BioSectionProps {
    children: ReactNode
    title: string
    detail: string
    seeDetail: string
    seeDetailHref: string
}

const BioSection = ({children, title, detail, seeDetail, seeDetailHref}: BioSectionProps) => (
    <div className={styles.frame}>
        <h1>{title}</h1>
        <div className={styles.flex}>
            <div className={styles.detail}>
                {detail}
                <Link href={seeDetailHref}>
                    <a>{seeDetail}</a>
                </Link>
            </div>
            <div className={styles.feeds}>
                {children}
            </div>
        </div>
    </div>
)

export default BioSection