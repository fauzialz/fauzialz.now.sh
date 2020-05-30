import styles from './TimelineHead.module.scss'
import Center from '../center'
import { Fragment, ReactNode } from 'react'

interface TimelineHeadProps {
    title: string
    children: ReactNode
}

const TimelineHead = ({title, children}: TimelineHeadProps) => (
    <Fragment>
        <Center>
            <h1 className={styles.title}>
                {title}
            </h1>
            {children}
        </Center>
        <div className={styles.line} />
    </Fragment>
)

export default TimelineHead