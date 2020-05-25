import styles from './Experiences.module.scss'
import BioSection from '../../templates/bioSection'
import { experience } from '../../../content/profile'
import JobCard from '../../atoms/jobCard'

const expDetail = 'In case you want to see my formal work experience record, the simplified list are shown.'
const jobs = experience.sort((a, b) => ((b.start.getFullYear() + b.start.getMonth()) - (a.start.getFullYear() + a.start.getMonth())))

const Experiences = () => (
    <section id="experiences">
        <BioSection
            title="Formal Work Experiences"
            detail={expDetail}
            seeDetail="See full work experiences"
            seeDetailHref="/experiences"
        >
            <div className={styles.feeds}>
                {jobs.map(exp => (
                    <JobCard key={exp.name} job={exp} />
                ))}
            </div>
        </BioSection>
    </section>
)

export default Experiences