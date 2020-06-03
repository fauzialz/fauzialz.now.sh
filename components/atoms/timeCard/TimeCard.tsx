import styles from './TimeCard.module.scss'
import Link from 'next/link'
import { ReactNode } from 'react'
import Center from '../center'
import { printDate } from '../../../content/const'
import cn from 'classnames'
import Icon from '@mdi/react'
import { mdiLinkVariant } from '@mdi/js';
import { mdiLinkVariantOff } from '@mdi/js';

interface TimeCardProps {
    start: Date
    end?: Date
    title: string
    subTitle?: string
    link?: string
    children?: ReactNode
}

const Inner = (props: TimeCardProps) => (
    <div className={cn({
        [styles.content] : props.link,
        [styles.contentNo] : !props.link
    })}>
        <div className={styles.head}>
            <div className={styles.title}>{props.title}</div>
            {props.subTitle && <div className={styles.subTitle}><span>{props.subTitle}</span></div>}
        </div>
        <div className={styles.socket}>
            {props.children}
        </div>
        <div className={cn({
            [styles.noteLink] : props.link,
            [styles.noteNoLink] : !props.link
        })}>
            <div className={styles.icon}>
                <Icon path={props.link? mdiLinkVariant : mdiLinkVariantOff} size={.75}/>
            </div>
            <div className={styles.text}>{props.link ? 'Detail Available': 'Detail Unavailable'}</div>
        </div>
    </div>
)

const TimeCard = (props : TimeCardProps) => {

    return (
        <div className={styles.frame}>
            <Center>
                <div className={styles.wrapper}>
                    <div className={styles.time}>
                        <span>
                            <div>{printDate(props.start)}</div>
                            <div className={styles.strip}>-</div>
                            <div>{props.end ? printDate(props.end): 'Present'}</div>
                        </span>
                    </div>
                    {props.link?
                        <Link href={props.link}>
                            <a>
                                <Inner {...props} />
                            </a>
                        </Link>: <Inner {...props} />
                    }
                </div>
            </Center>
        </div>
    )
}

export default TimeCard