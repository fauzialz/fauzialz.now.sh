import Link from "next/link";
import styles from "./InternalLink.module.scss"
import { ReactNode } from "react";
import Icon from '@mdi/react'
import { mdiLinkVariant } from '@mdi/js'

interface InternalLinkProps {
    href: string
    children: ReactNode
}

const InternalLink = ({href, children}: InternalLinkProps) => (
    <Link href={href}>
        <a className={styles.link}>
            {children}
            <Icon path={mdiLinkVariant} size={.68}/>
        </a>
    </Link>
)

export default InternalLink