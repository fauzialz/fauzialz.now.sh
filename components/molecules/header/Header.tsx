import styles from './Header.module.scss'
import { mainMenu } from '../../../content/router'
import Link from 'next/link'
import NavLink from '../../atoms/navLink'
import { summary } from '../../../content/profile'
import HeaderPhone from '../headerPhone'

const Header = () => (
    <div className={styles.header}>
        <nav className={styles.header__bar} >
            <div className={styles.header__bar__wrapper}>
                <Link href="/">
                    <div className={styles.header__icon}>
                        <img src="/logo.png" alt="fauzialz logo" />
                        <div>
                            {summary.first_name} {summary.last_name}
                        </div>
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

        <HeaderPhone />
    </div>
)

export default Header