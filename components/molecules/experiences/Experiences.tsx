import styles from './Experiences.module.scss'
import BioSection from '../../templates/bioSection'
import { sortedExp } from '../../../content/profile'
import JobCard from '../../atoms/jobCard'
import { subMenu } from '../../../content/router'
import Center from '../../atoms/center'
import InternalLink from '../../atoms/internalLink'

const expDetail = 'In case you want to see my formal work experience record, the simplified list are shown.'

const Experiences = () => (
    <section id="experiences" className={styles.base}>
        <Center noPaddingPhone>
            <div className={styles.center}>
                <h1 className={styles.title}>Formal Work Experiences</h1>
                <div className={styles.card}>
                    <p className={styles.detail}>{expDetail}</p>
                    <InternalLink href={subMenu.edu.href}>See full study record</InternalLink>
                </div>
                <div className={styles.socket}>
                    <div className={styles.cards}>
                        <div className={styles.line} />
                        {sortedExp.map(exp => (
                            <JobCard key={exp.name} job={exp} />
                        ))}
                    </div>
                </div>
            </div>
        </Center>
    </section>
)

export default Experiences