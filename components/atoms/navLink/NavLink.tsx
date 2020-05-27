import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Link from 'next/link'

interface NavLInkProps {
    href: string
    children: ReactNode
    className: string
    activeClass: string
}

const NavLink = ({href, children, className, activeClass}: NavLInkProps) => {
    let router = useRouter()
    // let innerClassName = router.pathname === href? `${className} ${activeClass}` : className
    let innerClassName = router.pathname.includes(href) ? `${className} ${activeClass}` : className

    return (
        <Link href={href}>
            <div className={innerClassName}>
                {children}
            </div>
        </Link>
    )
}

export default NavLink