import styles from './TimeCard.module.scss'
import { ReactNode, Fragment } from 'react'
import Center from '../center'
import { printMonth } from '../../../content/const'
import cn from 'classnames'
import Icon from '@mdi/react'
import { mdiLinkVariant } from '@mdi/js';
import { mdiLinkVariantOff } from '@mdi/js';
import InternalLink from '../internalLink'

interface TimeCardProps {
    start: Date
    end?: Date
    title: string
    subTitle?: string
    link?: string
    children?: ReactNode
}

const Date = (props: TimeCardProps) => (
    <div className={styles.date}>
        <div className={styles.start}>
            <span>{printMonth(props.start)}</span> {props.start.getFullYear()}
        </div>
        <div className={styles.until}>-</div>
        <div className={styles.end}>
            {props.end?
                <Fragment><span>{printMonth(props.end)}</span> {props.end.getFullYear()}</Fragment>:
                "Present"
            }
        </div>
    </div>
)

const TimeCard = (props : TimeCardProps) => {

    return (
        <div className={styles.frame}>
            <Center>
                <div className={styles.base}>
                    <div className={styles.time}>
                        <Date {...props} />
                    </div>
                    <div className={styles.card}>
                        <div className={styles.head}>
                            <div className={styles.card_time}>
                                <Date {...props} />
                            </div>
                            {props.link?
                                <div className={styles.title}>
                                    <InternalLink href={props.link}>
                                        {props.title}
                                    </InternalLink>
                                </div>:
                                <div className={styles.title}>{props.title}</div>
                            }
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
                </div>
            </Center>
        </div>
    )
}

export default TimeCard