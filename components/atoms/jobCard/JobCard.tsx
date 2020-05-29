import styles from './JobCard.module.scss'
import { Experience } from '../../../content/model'
import { printDate, printInterval } from '../../../content/const'
import Link from 'next/link'
import { subMenu } from '../../../content/router'
import Icon from '@mdi/react'
import { mdiLinkVariant } from '@mdi/js'

interface JobCardProps {
    job: Experience
}

const JobCard = ({job}: JobCardProps) => (
    <div className={styles.frame} title="Click to see detail">
        <Link href={`${subMenu.exp.href}/${job.id}`}><a>
            <div className={styles.title}>
                {job.as}
            </div>
            <div className={styles.company}>
                {job.name}
            </div>
            <div className={styles.date}>
                {printDate(job.start)} - {job.end? printDate(job.end) : 'Present'}
                <span>{printInterval(job.start)}</span>
            </div>
            {job.disclaimer &&
            <div className={styles.disclaimer}>
                <span>{job.disclaimer}</span>
            </div>}
            <div className={styles.icon}>
                <Icon path={mdiLinkVariant} />
            </div>
        </a></Link>
    </div>
)

export default JobCard