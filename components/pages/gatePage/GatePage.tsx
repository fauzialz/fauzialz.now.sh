import styles from './GatePage.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import { MouseEvent, useRef, useState } from 'react'
import { summary } from '../../../content/profile'
import { mainMenu } from '../../../content/router'
import HeaderPhone from '../../molecules/headerPhone'

interface Vector2D {
    x: number,
    y: number
}

const vectorDistance = (a: Vector2D, b: Vector2D) => {
    return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2))
}

const calcParallax = (center: number, x: number) => {
    let boundery = 8
    return (center - x) * boundery / center
}

const calcScale = (distance: number) => {
    let boundery = 125
    return 1 + (distance/boundery)
}

const GatePage = () => {
    const gate = useRef<HTMLDivElement>(null)
    const [coordinates, setCoordinates] = useState({x: -3, y: 3, s: 1})
    const [mouse, setMouse] = useState({x: 0, y: 0})
    const [parallax, setParallax] = useState(false)
    const description = `Personal site of ${summary.first_name} ${summary.last_name}`

    const gateMouseTracker = (e: MouseEvent<HTMLDivElement>) => {
        if(!parallax) return
        let centerX = gate.current.offsetWidth / 2
        let centerY = gate.current.offsetHeight / 2 - 78
        let x = calcParallax(centerX, e.clientX)
        let y = calcParallax(centerY, e.clientY)
        let distance = vectorDistance({x: 0, y: 0}, {x:x, y:y})
        let s = calcScale(distance)
        setCoordinates({x: x, y: y, s: s})
        setMouse({x: e.clientX, y: e.clientY})
    }

    return (
        <div className={styles.gate} onMouseMove={gateMouseTracker} ref={gate}>
            <Head>
                <title>{summary.alias}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description} />
            </Head>
            <div className={styles.light}
                style={{
                    top: `${mouse.y}px`,
                    left: `${mouse.x}px`,
                    display: mouse.x > gate.current.offsetWidth - 70 || mouse.y > gate.current.offsetHeight - 70?
                        'none' : 'flex'
                }}
            />
            <div className={styles.gate__parallax}>
                <div className={styles.gate__parallax__box} onMouseOver={() => setParallax(true)}>
                    <div>

                        <div className={styles.gate__username}>
                            {summary.alias}
                            <div className={styles.gate__username__shadow}
                                style={{transform: `translate3d(${coordinates.x}px, ${coordinates.y}px, 0) scale(${coordinates.s})`}}
                            >
                                {summary.alias}
                            </div>
                        </div>

                        <div className={styles.gate__description}>
                            {description}
                        </div>

                        <div className={styles.gate__menu}>
                            <div className={styles.gate__menu__title}>
                                <div>
                                    Where do you want to go?
                                </div>
                            </div>
                            {mainMenu.map(item => (
                                <Link href={item.href} key={item.title}>
                                    <div className={styles.gate__menu__link}>
                                        <a>{item.title}</a>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <HeaderPhone />
        </div>
    )
}

export default GatePage