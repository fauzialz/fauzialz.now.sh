import styles from './HeaderPhone.module.scss'
import { mainMenu } from '../../../content/router'
import NavLink from '../../atoms/navLink'
import { RouteObj } from '../../../content/model'
import Icon from '@mdi/react'
import { mdiHomeOutline } from '@mdi/js'
import { mdiPostOutline } from '@mdi/js'
import { mdiBriefcaseVariantOutline } from '@mdi/js'
import { mdiAccountOutline } from '@mdi/js'

const icon = [
    mdiHomeOutline,
    mdiPostOutline,
    mdiBriefcaseVariantOutline,
    mdiAccountOutline
]

const HeaderPhone = () => {

    let menuReversed = [...mainMenu]

    let menu: RouteObj[] = [{
        href: '/',
        title: 'Home'
    }, ...menuReversed.reverse()]

    return(
        <div className={styles.bottom}>
            {menu.map((item, i) => (
                <NavLink
                    key={item.href}
                    href={item.href}
                    className={styles.bottom__link}
                    activeClass={styles.active}
                >
                    <a>
                        <Icon path={icon[i]} />
                        {item.title}
                    </a>
                    {/* <div /> */}
                </NavLink>
            ))}
        </div>
    )
}

export default HeaderPhone