import Link from "next/link";
import styles from "./InternalLink.module.scss"
import { ReactNode } from "react";

interface InternalLinkProps {
    href: string
    children: ReactNode
}

const InternalLink = ({href, children}: InternalLinkProps) => (
    <Link href={href}>
        <a className={styles.link}>{children}<div /></a>
    </Link>
)

export default InternalLink