import { useRouter } from "next/router"
import { RouteObj } from "../../../content/model"
import { routeAlias } from "../../../content/router"
import styles from './Breadscrumb.module.scss'
import Link from "next/link"
import { Fragment } from "react"
import cn from 'classnames'

const getBreadscrumbList = (tree: string[]) => {
    let breadscrumbList: RouteObj[] = []
    let hrefString = ''
    for (let i in tree) {
        hrefString = `${hrefString}/${tree[i]}`
        let refIndex =  routeAlias.findIndex(e => e.href === hrefString)
        let title = refIndex > -1?  routeAlias[refIndex].title.toLowerCase() : tree[i].toLowerCase()
        breadscrumbList.push({
            title: title,
            href: hrefString
        })
    }
    return breadscrumbList
}

const Breadscrumb = () => {
    let router = useRouter()
    let tree = router.pathname.split('/')
    tree = tree.splice(1, tree.length)
    
    let breadscrumbList = getBreadscrumbList(tree)

    return (
        <div className={styles.frame}>
            {breadscrumbList.map((bread, i) => (
                <Fragment key={i}>
                    <Link href={bread.href}>
                        <a className={cn({
                            [styles.link] : router.pathname !== bread.href,
                            [styles.linkActive] : router.pathname === bread.href
                        })}>
                            {bread.title}
                        </a>
                    </Link>
                    {i !== breadscrumbList.length - 1 && <div className={styles.divider}>/</div>}
                </Fragment>
            ))}
        </div>
    )
}

export default Breadscrumb