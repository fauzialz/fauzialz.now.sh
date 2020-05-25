import styles from './JobCard.module.scss'
import { Experience } from '../../../content/model'
import { monthNames } from '../../../content/const'
import Link from 'next/link'
import { subMenu } from '../../../content/router'

interface JobCardProps {
    job: Experience
}

const printDate = (date: Date) => `${monthNames[date.getMonth()].substr(0,3)} ${date.getFullYear()}`
const printInterval = (date: Date) => {
    let now = new Date()
    let gap = (now.getTime() - date.getTime()) / 1000 / 60 / 60
    let days = Math.floor(gap / 24)
    let year = Math.floor(days / 365)
    let month = year > 0? Math.floor((days - (year * 365)) / 30) : Math.floor(days / 30)
    let printYear = year > 0 ? `${year} yr` : ''
    let printMonth = month > 0? `${month} mos` : ''
    return `${printYear} ${printMonth}`
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
        </a></Link>
    </div>
)

export default JobCard