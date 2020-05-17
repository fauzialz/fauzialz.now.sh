import styles from './HeaderPhone.module.scss'
import { mainMenu } from '../../../content/router'
import NavLink from '../../atoms/navLink'

const HeaderPhone = () => (
    <div className={styles.bottom}>
        {mainMenu.map(item => (
            <NavLink
                key={item.href}
                href={item.href}
                className={styles.bottom__link}
                activeClass={styles.active}
            >
                <a>{item.title}</a>
                <div />
            </NavLink>
        ))}
    </div>
)

export default HeaderPhone