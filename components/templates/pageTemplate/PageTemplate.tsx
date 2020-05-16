import style from './PageTemplate.module.scss'
import Header from '../../molecules/header'
import { ReactNode } from 'react'

export interface PageTemplateProps {
    children: ReactNode
}

const PageTemplate = ({children}: PageTemplateProps) => (
    <div className={style.template}>
        <Header />
        <div className={style.template__wrapper}>
            {children}
        </div>
    </div>
)

export default PageTemplate