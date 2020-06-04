import styles from './UnderConstruction.module.scss'
import Center from '../center'
import Breadscrumb from '../breadcrumb'

const UnderConstruction = ({ breadcrumb }: { breadcrumb?: boolean } ) => (
    <div className={styles.frame}>
        <Center>
            {breadcrumb && <Breadscrumb />}
            This page is under construction!
        </Center>
    </div>
)

export default UnderConstruction