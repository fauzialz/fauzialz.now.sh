import styles from './Experiences.module.scss'
import BioSection from '../../templates/bioSection'
import { sortedExp } from '../../../content/profile'
import JobCard from '../../atoms/jobCard'
import { subMenu } from '../../../content/router'

const expDetail = 'In case you want to see my formal work experience record, the simplified list are shown.'

const Experiences = () => (
    <section id="experiences">
        <BioSection
            title="Formal Work Experiences"
            detail={expDetail}
            seeDetail="See full work experiences"
            seeDetailHref={subMenu.exp.href}
        >
            <div className={styles.feeds}>
                {sortedExp.map(exp => (
                    <JobCard key={exp.name} job={exp} />
                ))}
            </div>
        </BioSection>
    </section>
)

export default Experiences