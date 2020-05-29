import styles from './Center.module.scss'
import { ReactNode } from 'react'

interface CenterProps {
    children : ReactNode
}

const Center = ({children}: CenterProps) => (
    <div className={styles.center}>
        {children}
    </div>
)

export default Center