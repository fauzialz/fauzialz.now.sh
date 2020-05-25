import styles from './StudyCard.module.scss'
import { Study } from '../../../content/model'
import cn from 'classnames'
import Link from 'next/link'
import { Fragment } from 'react'
import { subMenu } from '../../../content/router'

export interface StudyCardProps {
    school: Study
}

const StudyCardDefault = ({school}: StudyCardProps) => (
    <Fragment>
        <div className={styles.name}>{school.school_name}</div>
        {school.degree && <div className={styles.degree}>{school.degree.level} degree, {school.major}</div>}
        <div className={styles.time}>
            {school.start.getFullYear()} - {school.end.getFullYear()}
        </div>
        <div className={styles.dot_socket}>
            <div className={styles.dot} />
        </div>
    </Fragment>
)

const StudyCard = ({school}: StudyCardProps) => {
    let { detailed } = school

    let StudyCardContent = () => {
        if(detailed) return (
            <Link href={subMenu.edu.href + school.route}>
                <a href={subMenu.edu.href + school.route}><StudyCardDefault school={school} /></a>
            </Link>
        )
        return <StudyCardDefault school={school} />
    }

    return (
        <div className={cn({
            [styles.card] : detailed === false,
            [styles.card__detailed] : detailed
        })}>
            <StudyCardContent />
        </div>
    )
}

export default StudyCard