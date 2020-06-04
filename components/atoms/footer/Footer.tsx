import styles from './Footer.module.scss'
import Center from '../center'
import Link from 'next/link'
import { summary, social } from '../../../content/profile'
import Icon from '@mdi/react'
import { mdiTwitter } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiGitlab } from '@mdi/js';
import { mdiCopyright } from '@mdi/js';
import ExternalLink from '../externalLink'

const socialIcon = [
    mdiTwitter,
    mdiInstagram,
    mdiLinkedin
]

const now = new Date()

const Footer = () => (
    <div className={styles.frame}>
        <Center>
            <div className={styles.socket}>
                <div className={styles.left}>
                    <Link href="/">
                        <a className={styles.link}>
                            <div className={styles.logo_wrap}>
                                <img src="/logo-white.png" alt="fauzialz logo" />
                                <div>
                                    {summary.first_name} {summary.last_name}
                                </div>
                            </div>
                        </a>
                    </Link>
                    <div className={styles.greating}>
                        Thank you for read this far. Now, let's connect!<br /><br />
                        Email: {summary.email} <br />
                        Phone: {summary.phone}
                    </div>
                    <div className={styles.content}>
                        {social.map( (item, i) => (
                            <a className={styles.social} href={item.link} target="blank" key={i}>
                                <Icon path={socialIcon[i]} size={1} />
                            </a>
                        ))}
                        {summary.git && 
                            <a className={styles.social} href={summary.git} target="blank">
                                <Icon path={mdiGitlab} size={1} />
                            </a>
                        }
                    </div>
                    <div className={styles.copyright}>
                        <Icon path={mdiCopyright} size={.7} />
                        {now.getFullYear()+ ' '}
                        {summary.alias+ '. '}
                        <ExternalLink href="https://gitlab.com/fauzialz/personal-site">Repostory</ExternalLink>
                    </div>
                </div>
            </div>
        </Center>
    </div>
)

export default Footer