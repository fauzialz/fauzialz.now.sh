import styles from './Study.module.scss'
import Link from 'next/link'
import { study } from '../../../content/profile'
import StudyCard from '../../atoms/studyCard'
import BioSection from '../../templates/bioSection'
import { subMenu } from '../../../content/router'
import Center from '../../atoms/center'

const studyDetail = 'In case you want to see my education record, my two latest education stages are shown.'

const Study = () => (
    <Center>
        <section id="study">
            <BioSection
                title="Formal Education"
                detail={studyDetail}
                seeDetail="See full study record"
                seeDetailHref={subMenu.edu.href}
            >
                <div className={styles.timeline}>
                    <div className={styles.line} />
                    <div className={styles.study_list}>
                        <div className={styles.study_blank} />
                        <StudyCard school={study[study.length - 2]} />
                        <StudyCard school={study[study.length - 1]} />
                    </div>
                </div>
            </BioSection>
        </section>
    </Center>
)

export default Study