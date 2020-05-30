import styles from './AboutMe.module.scss'
import { summary, sortedExp, social } from '../../../content/profile'
import { monthNames, firstIsVowel } from '../../../content/const'
import ExternalLink from '../../atoms/externalLink'
import Link from 'next/link'
import { Fragment } from 'react'
import Center from '../../atoms/center'

const currentJob = sortedExp[0]
const anOrA = (word: string) => firstIsVowel(word)? 'an' : 'a'
const resumeLink = 'https://drive.google.com/file/d/1qVBHdcaazMFjBvukH0i6GWDkGLBk404o/view?usp=sharing'

const AboutMe = () => {

    let socials = [...social]
    socials.pop()

    return(
        <Center>
            <section className={styles.me} id="about">
                <div className={styles.me__pict} title="this is my best pict, oke">
                    <img src="/self.jpg" alt={`${summary.first_name} ${summary.last_name}`} />
                    <div />
                </div>
                <div className={styles.me__slogan}>
                    {summary.slogan}
                </div>
                <div className={styles.me__box}>
                    Hi! My name is {summary.first_name} {summary.last_name}.
                    I'm {anOrA(summary.title_long)} {summary.title_long} based in {summary.city}, {summary.country}.
                    <br /><br />

                    {summary.about} From {summary.title_short.toLowerCase()} side, I'm comfortable with TypeScript, React, Redux, Next.Js, Node.js, SASS, MySQL, PostgreSQL.
                    <br /><br />

                    {/* From web development side, I'm comfortable with React, Redux, Next.Js, Node.js, SASS, MySQL, PostgreSQL, and Firebase.
                    <br /><br /> */}
                    <b>What I do now?</b><br /><br />
                    I'm {anOrA(currentJob.as)}
                    {` ${currentJob.as} `}
                    at {currentJob.companySite? <ExternalLink href={currentJob.companySite}>{currentJob.name}</ExternalLink> : ` ${currentJob.name}`}
                    {` since`} {`${monthNames[currentJob.start.getMonth()]} ${currentJob.start.getFullYear()}`}. In spare time, I do side projects and learn more thing about programming, especially on the field of Front-end Engineering.
                    <br /><br />
                    {/* <b>If you have a project and think I can help, get in touch.</b><br /><br /> */}

                    If you have a project and think I can help, you can say hi to me on {social.map(item => (
                        <Fragment key={item.title}>
                            {' '}
                            <ExternalLink href={item.link}>
                                {item.title}
                            </ExternalLink>,
                        </Fragment>
                    ))}
                    {' '} or send a message to <ExternalLink href={summary.email}>{summary.email}</ExternalLink>. You can also
                    <br /><br />
                    <a href={resumeLink} target="blank"><button className={styles.print}>
                        Print Resume
                    </button></a>
                </div>
            </section>
        </Center>
    )                                                                   
}

export default AboutMe