import { RouteObj } from "./model"

export const mainMenu: RouteObj[] = [
    {href: '/bio', title: 'Profile'},
    {href: '/portofolio', title: 'Portofolio'},
    {href: '/blog', title: 'Blog'}
]

interface SubMenu {
    edu: RouteObj
    exp: RouteObj
}

export const subMenu: SubMenu = {
    edu: {href: `${mainMenu[0].href}/studies`, title: 'Studies'},
    exp: {href: `${mainMenu[0].href}/experiences`, title: 'Experiences'},
}

export const eduMenu: RouteObj[] = [
    {href: subMenu.edu.href + '/bachelor', title: 'Telkom Univeristy'}
]

export const routeAlias: RouteObj[] = [
    ...mainMenu,
    subMenu.edu,
    subMenu.exp,
    ...eduMenu
]