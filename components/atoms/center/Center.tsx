import styles from './Center.module.scss'
import { ReactNode } from 'react'
import cn from 'classnames'

interface CenterProps {
    children : ReactNode
    withHeader ?: boolean
    noPaddingPhone ?: boolean
}

const Center = ({children, withHeader, noPaddingPhone}: CenterProps) => (
    <div className={cn({
        [styles.center_padding] : withHeader,
        [styles.no_padding] : noPaddingPhone,
        [styles.center] : !withHeader
    })}>
        {children}
    </div>
)

export default Center