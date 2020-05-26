import Link from "next/link";
import styles from "./ExternalLink.module.scss"
import { ReactNode } from "react";

interface ExternalLinkProps {
    href: string
    children: ReactNode
}

const ExternalLink = ({href, children}: ExternalLinkProps) => (
    <a href={href} target="blank" className={styles.link}>{children}<div /></a>
)

export default ExternalLink