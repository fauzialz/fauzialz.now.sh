import styles from './Header.module.scss'
import { mainMenu } from '../../../content/router'
import Link from 'next/link'
import NavLink from '../../atoms/navLink'
import { summary } from '../../../content/profile'
import HeaderPhone from '../headerPhone'
import { useEffect, useState, ReactNode } from 'react'
import Center from '../../atoms/center'
import cn from 'classnames'

const NavDrop = ({position, children}: { position: number, children: ReactNode}) => {
    let [boundary, setBoundary] = useState(60)
    let [y1,setY1] = useState(0)
    let [y2, setY2] = useState(0)

    useEffect(() => {
        let boundary = 60
        let delay = 0
        let positionY1 = position
        let positionY2 = position - delay
        if(positionY1 < delay) {positionY2 = 0}
        
        if(positionY1 > boundary) positionY1 = boundary
        if(positionY2 > boundary) positionY2 = boundary
        setY1(positionY1)
        setY2(positionY2)
        setBoundary(boundary)

    }, [position])

    return (
        <nav className={styles.nav} 
            style={{top: `${y1 - boundary}px`}}
        >
            <div className={styles.relative}>
                <div className={styles.socket}
                    style={{ transform: `translateY(${(boundary * 2) - (y2 * 2)}px)`}}
                >
                    <Center>
                        {children}
                    </Center>
                </div>
            </div>
        </nav>
    )
}

const Header = (props: {position: number}) => (
        <div className={styles.header}>
            <NavDrop {...props}>
                <div className={styles.wrapper}>
                    <Link href="/">
                        <a className={styles.logo}>
                            <img src="/logo.png" alt="fauzialz logo" />
                        </a>
                    </Link>
                    <div className={styles.menu_socket}>
                        {mainMenu.map(item => (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                className={styles.menu}
                                activeClass={styles.menu_active}
                            >
                                <span data-content={item.title}>
                                    {item.title}
                                </span>
                                <div><div /></div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </NavDrop>

            <nav className={styles.header__bar} >
                <div className={styles.header__bar__wrapper}>
                    <Link href="/">
                        <a className={styles.header__icon}>
                            <img src="/logo.png" alt="fauzialz logo" />
                            <div>
                                {summary.first_name} {summary.last_name}
                            </div>
                        </a>
                    </Link>
                
                    <div className={styles.header__menu}>
                        {mainMenu.map(item => (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                className={cn(styles.menu, styles.menuBig)}
                                activeClass={styles.menu_active}
                            >
                                <span data-content={item.title}>
                                    {item.title}
                                </span>
                                <div><div /></div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            <HeaderPhone />
        </div>
    )

export default Header