import styles from "./ExternalLink.module.scss"
import { ReactNode } from "react";
import Icon from '@mdi/react'
import { mdiOpenInNew } from '@mdi/js'

interface ExternalLinkProps {
    href: string
    children: ReactNode
}

const ExternalLink = ({href, children}: ExternalLinkProps) => (
    <a href={href} target="blank" className={styles.link}>
        {children}
        <Icon path={mdiOpenInNew} size={.68}/>
    </a>
)

export default ExternalLink