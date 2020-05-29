import styles from './TimelineHead.module.scss'
import Center from '../center'
import { Fragment, ReactNode } from 'react'

interface TimelineHeadProps {
    children: ReactNode
}

const TimelineHead = ({children}: TimelineHeadProps) => (
    <Fragment>
        <Center>
            <h1 className={styles.title}>
                {children}
            </h1>
        </Center>
        <div className={styles.line} />
    </Fragment>
)

export default TimelineHead