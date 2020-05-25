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
    edu: {href: '/studies', title: 'Studies'},
    exp: {href: '/experiences', title: 'Experiences'},
}