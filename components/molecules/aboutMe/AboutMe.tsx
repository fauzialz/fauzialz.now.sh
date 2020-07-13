import styles from './AboutMe.module.scss'
import { summary, sortedExp, social } from '../../../content/profile'
import { monthNames, firstIsVowel } from '../../../content/const'
import ExternalLink from '../../atoms/externalLink'
import { Fragment, useState } from 'react'
import Center from '../../atoms/center'
import Icon from '@mdi/react'
import { mdiOpenInNew } from '@mdi/js'
import { useLogEvent, firebaseEvent } from '../../../content/firebase'

const currentJob = sortedExp[0]
const anOrA = (word: string) => firstIsVowel(word)? 'an' : 'a'
const resumeLink = 'https://drive.google.com/file/d/1DQLGbumnT14ZcoeYJszOfUIuSK9flCIj/view?usp=sharing'
const path1 = 'M158 496.5C150.5 417.5 179 365 179 295.5C179 189.857 75.6041 229.488 25.9783 136.5C10.3087 107.138 0 64.5546 0 0H653V758.5C645.5 723 622.126 668.715 560.5 639.5C477 599.915 452.881 639.5 356.5 639.5C289 639.5 166.345 584.4 158 496.5Z'
const path2 = 'M161 508C161 424.5 197.5 381 183 303.5C163.572 199.659 72.7062 200.523 31 156.5C4 128 4 68.5546 4 4H657V766.5C639 720.5 613 659.278 575.5 641.5C492 601.915 457.381 635 361 635C293.5 635 161 596.295 161 508Z'

const AboutMe = () => {
    let [path, setPath] = useState(path1)

    let socials = [...social]
    socials.pop()

    return(
        <section className={styles.frame} id="about">
            <div className={styles.background}>
                <div className={styles.svg}>
                    <svg width="653" height="759" viewBox="0 0 653 759" fill="none" >
                        <g>
                            <path d={path} fill="url(#paint0_linear)" onMouseOver={() => setPath(path2)} onMouseLeave={() => setPath(path1)}/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear" x1="176.5" y1="586.5" x2="653" y2="-9.49981" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#298873" stopOpacity="0.8"/>
                                <stop offset="1" stopColor="#21e0aa" stopOpacity="0.6"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <Center noPaddingPhone>
                    <div className={styles.grid}>
                        <h1 className={styles.slogan}>{summary.slogan}</h1>
                        
                        <div className={styles.intro_right}>
                            <div className={styles.pict} title="It's me, Fauzi!">
                                <img src="/self.jpg" alt={`${summary.first_name} ${summary.last_name}`} />
                            </div>
                        </div>
                        <div className={styles.intro_left}>
                            <div className={styles.summary}>
                                <div className={styles.text}>
                                    <p>
                                        Hi! My name is {summary.first_name} {summary.last_name}.
                                        I'm {anOrA(summary.title_long)} {summary.title_long} based in {summary.city}, {summary.country}.
                                    </p>
                                    <p>
                                        {summary.about} From {summary.title_short.toLowerCase()} side, I'm comfortable with TypeScript, React, Redux, Next.Js, Node.js, SASS, MySQL, PostgreSQL.
                                    </p>
                                </div>
                                <div className={styles.text}>
                                    <p>
                                        <b>What I do now?</b>
                                    </p>
                                    <p>
                                        I'm {anOrA(currentJob.as)}
                                        {` ${currentJob.as} `}
                                        at {currentJob.companySite? <ExternalLink href={currentJob.companySite}>{currentJob.name}</ExternalLink> : ` ${currentJob.name}`}
                                        {` since`} {`${monthNames[currentJob.start.getMonth()]} ${currentJob.start.getFullYear()}`}. In spare time, I do side projects and learn more thing about programming, especially on the field of Front-end Engineering.
                                    </p>
                                    <p>
                                        If you have a project and you think that I can help, you can say hi to me on {social.map((item, i) => (
                                            <Fragment key={item.title}>
                                                {' '}
                                                <ExternalLink href={item.link}>
                                                    {item.title}
                                                </ExternalLink>{i === social.length - 1? '.': ','}
                                            </Fragment>
                                        ))}
                                    </p>
                                    <div className={styles.resume}>
                                        <div className={styles.email}>
                                            Send me an email
                                            <a href={`mailto:${summary.email}?Subject=Hello!`}>
                                                {summary.email}
                                                <Icon path={mdiOpenInNew} size={.68}/>
                                            </a>
                                        </div>
                                        {/* <div className={styles.divider}></div> */}
                                        <div className={styles.drive}>
                                            <a href={resumeLink} target="blank"><button className={styles.print} onClick={() => useLogEvent(firebaseEvent.RESUME)}>
                                                Print Resume
                                            </button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Center>
            </div>
        </section>
    )                                                                   
}

export default AboutMe