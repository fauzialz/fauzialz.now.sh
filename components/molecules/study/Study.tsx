import styles from './Study.module.scss'
import { study } from '../../../content/profile'
import StudyCard from '../../atoms/studyCard'
import { subMenu } from '../../../content/router'
import Center from '../../atoms/center'
import { eduDetail } from '../../../pages/bio/studies'
import InternalLink from '../../atoms/internalLink'

const eduTail = 'In this section my two latest education stages are shown.'

const Study = () => (
    <section id="study" className={styles.base}>
        <Center noPaddingPhone>
            <div className={styles.center}>
                <h1 className={styles.title}>Formal Education</h1>
                <div className={styles.card}>
                    <p className={styles.detail}>{eduDetail.charAt(0).toUpperCase() + eduDetail.slice(1) + ' ' + eduTail}</p>
                    <InternalLink href={subMenu.edu.href}>See full study record</InternalLink>
                </div>
                <div className={styles.socket}>
                    <div className={styles.line} />
                    <div className={styles.dummy} />
                    <div className={styles.cards}>
                        <StudyCard school={study[study.length - 2]} />
                        <StudyCard school={study[study.length - 1]} />
                    </div>
                </div>
            </div>
        </Center>
    </section>
)

export default Study