import style from './PageTemplate.module.scss'
import Header from '../../molecules/header'
import { ReactNode, useEffect, useState } from 'react'
import Footer from '../../atoms/footer'
import { PageLogEvent } from '../../../content/firebase'

export interface PageTemplateProps {
    children: ReactNode
}

const PageTemplate = ({children}: PageTemplateProps) => {
    let [position, setPosition] = useState(0)

    useEffect( () => {
        window.addEventListener('scroll', bodyScrollHandler)
        return () => {
            window.removeEventListener('scroll', bodyScrollHandler)
        }
    })

    const bodyScrollHandler = () => {
        let content = document.getElementById('content')
        let top = content.getBoundingClientRect().top
        if( top < 0) top = top * -1
        setPosition(top)
    }

    return (
        <PageLogEvent>
            <div className={style.template}>
                <Header position={position} />
                <div id='content' className={style.template__wrapper}>
                    {children}
                </div>
                <Footer />
            </div>
        </PageLogEvent>
    )
}

export default PageTemplate