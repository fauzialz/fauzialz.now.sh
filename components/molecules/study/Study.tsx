import styles from './Study.module.scss'
import Link from 'next/link'
import { study } from '../../../content/profile'

const Study = () => (
    <section className={styles.study} id="study">
        <h1>Formal Education</h1>
        <div className={styles.flex}>
            <div className={styles.study__intro}>
                In case you want to see my education record, my two latest education stage are shown.
                <Link href="/study">
                    See Full Record
                </Link>
            </div>
            <div className={styles.study__timeline}>
                <div className={styles.study__timeline__line} />
                <div>
                    <div className={styles.study__timeline__off} />
                    <div className={styles.study__timeline__on}>
                        <div className={styles.study__timeline__on__before}>
                            <div className={styles.name}>
                                {study[study.length - 2].school_name}
                            </div>
                            <div className={styles.time}>
                                {study[study.length - 2].start.getFullYear()} - {study[study.length - 2].end.getFullYear()}
                            </div>
                            <div className={styles.dot}>
                                <div className={styles.dot__dot}></div>
                            </div>
                        </div>
                        <Link href="/study/bachelor">
                            <div className={styles.study__timeline__on__now} title="Click to see education detail">
                                <div className={styles.name}>
                                    {study[study.length - 1].school_name}
                                </div>
                                <div className={styles.faculty}>
                                    {study[study.length - 1].major}
                                </div>
                                <div className={styles.time}>
                                    {study[study.length - 1].start.getFullYear()} - {study[study.length - 1].end.getFullYear()}
                                </div>
                                <div className={styles.dot}>
                                    <div className={styles.dot__active}></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Study