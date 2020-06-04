import style from './PageTemplate.module.scss'
import Header from '../../molecules/header'
import { ReactNode } from 'react'
import Footer from '../../atoms/footer'

export interface PageTemplateProps {
    children: ReactNode
}

const PageTemplate = ({children}: PageTemplateProps) => (
    <div className={style.template}>
        <Header />
        <div className={style.template__wrapper}>
            {children}
        </div>
        <Footer />
    </div>
)

export default PageTemplate