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

const AboutMe = () => {

    let socials = [...social]
    socials.pop()

    return(
        <section className={styles.frame} id="about">
            <div className={styles.background}>
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
                                            <a href={resumeLink} target="blank"><button className={styles.print} onClick={() => useLogEvent(firebaseEvent.view_item, {item: 'resume'})}>
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