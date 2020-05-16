import styles from './Header.module.scss'
import { mainMenu } from '../../../content/router'
import Link from 'next/link'
import NavLink from '../../atoms/navLink'

const Header = () => (
    <div className={styles.header}>
        <nav className={styles.header__bar} >
            <div className={styles.header__bar__wrapper}>
                <Link href="/">
                    <div className={styles.header__icon}>
                        <img src="/logo.png" alt="fauzialz logo" />
                    </div>
                </Link>
            
                <div className={styles.header__menu}>
                    {mainMenu.map(item => (
                        <NavLink
                            key={item.href}
                            href={item.href}
                            className={styles.header__menu__link}
                            activeClass={styles.active}
                        >
                            <a>{item.title}</a>
                            <div />
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    </div>
)

export default Header