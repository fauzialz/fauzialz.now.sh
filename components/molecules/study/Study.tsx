import styles from './Study.module.scss'
import Link from 'next/link'
import { study } from '../../../content/profile'
import StudyCard from '../../atoms/studyCard'

const Study = () => (
    <section className={styles.study} id="study">
        <h1>Formal Education</h1>
        <div className={styles.flex}>
            <div className={styles.study__intro}>
                In case you want to see my education record, my two latest education stages are shown.
                <Link href="/study">
                    <a>See Full Record</a>
                </Link>
            </div>
            <div className={styles.study__timeline}>
                <div className={styles.study__timeline__line} />
                <div className={styles.study_list}>
                    <div className={styles.study_blank} />
                    <StudyCard school={study[study.length - 2]} />
                    <StudyCard school={study[study.length - 1]} />
                </div>
            </div>
        </div>
    </section>
)

export default Study