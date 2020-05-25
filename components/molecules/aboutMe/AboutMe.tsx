import styles from './AboutMe.module.scss'
import { summary, sortedExp } from '../../../content/profile'
import { monthNames, firstIsVowel } from '../../../content/const'

const currentJob = sortedExp[0]
const anOrA = (word: string) => firstIsVowel(word)? 'an' : 'a'

const AboutMe = () => (
    <section className={styles.me} id="about">
        <div className={styles.me__pict} title="this is my best pict, oke">
            <img src="/self.jpg" alt={`${summary.first_name} ${summary.last_name}`} />
        </div>
        <div className={styles.me__slogan}>
            {summary.slogan}
        </div>
        <div className={styles.me__box}>
            Hi! My name is {summary.first_name} {summary.last_name}.
            I'm {anOrA(summary.title_long)} {summary.title_long} based in {summary.city}, {summary.country}.
            <br /><br />

            {summary.about} From web dev side, I'm comfortable with TypeScript, React, Redux, Next.Js, Node.js, SASS, MySQL, PostgreSQL, and Firebase.
            <br /><br />

            {/* From web development side, I'm comfortable with React, Redux, Next.Js, Node.js, SASS, MySQL, PostgreSQL, and Firebase.
            <br /><br /> */}
            <b>What I do now?</b><br /><br />
            Formally, I'm {anOrA(currentJob.as)}
            {` ${currentJob.as} `}
            at {currentJob.companySite? <a href={currentJob.companySite} target="blank">{currentJob.name}</a> : ` ${currentJob.name}`}
            {` since`} {`${monthNames[currentJob.start.getMonth()]} ${currentJob.start.getFullYear()}`}. In spare time, I do side projects and learn more thing about programming, especially on the field of Front-end Engineering.
        </div>
    </section>
)

export default AboutMe