import styles from './Center.module.scss'
import { ReactNode } from 'react'
import cn from 'classnames'

interface CenterProps {
    children : ReactNode
    withHeader ?: boolean
}

const Center = ({children, withHeader}: CenterProps) => (
    <div className={cn({
        [styles.center_padding] : withHeader,
        [styles.center] : !withHeader
    })}>
        {children}
    </div>
)

export default Center