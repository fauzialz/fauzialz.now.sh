import styles from './AboutMe.module.scss'
import { summary } from '../../../content/profile'

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
            I'm a {summary.title_long} based in {summary.city}, {summary.country}.
            <br /><br />

            {summary.about} From web dev side, I'm comfortable with TypeScript, React, Redux, Next.Js, Node.js, SASS, MySQL, PostgreSQL, and Firebase.
            <br /><br />

            {/* From web development side, I'm comfortable with React, Redux, Next.Js, Node.js, SASS, MySQL, PostgreSQL, and Firebase.
            <br /><br /> */}
            <b>What I do now?</b><br /><br />
            Formally, I'm an Application Support Engineer at <a href="https://www.mapan.id/" target="blank">Mapan - PT RUMA</a> since September 2018. In spare time, I do side projects and learn more thing about programming, especially on the field of Front-end Engineering.
        </div>
    </section>
)

export default AboutMe