import styles from './Footer.module.scss'
import Center from '../center'
import Link from 'next/link'
import { summary, social } from '../../../content/profile'
import Icon from '@mdi/react'
import { mdiTwitter, mdiInstagram, mdiLinkedin, mdiGitlab, mdiCopyright, mdiContentCopy } from '@mdi/js';
import ExternalLink from '../externalLink'

const socialIcon = [
    mdiTwitter,
    mdiInstagram,
    mdiLinkedin
]

const now = new Date()

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard')
    }).catch(err => {
        console.error(`Could not copy contact ${text}: `, err);
    })
} 

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
                        Oh! You come this far? Let's connect then!
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.copy} onClick={() => copyToClipboard(summary.email)}>
                            {summary.email}
                            <Icon path={mdiContentCopy} size={.65} />
                        </div>
                        <div className={styles.copy} onClick={() => copyToClipboard(summary.phone)}>
                            {summary.phone}
                            <Icon path={mdiContentCopy} size={.65} />
                        </div>
                    </div>
                    <div className={styles.content}>
                        {social.map( (item, i) => (
                            <a className={styles.social} href={item.link} target="blank" key={i} aria-label={item.title}>
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