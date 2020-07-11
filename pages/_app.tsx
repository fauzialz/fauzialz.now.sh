import '../style/global.scss'
import * as firebase from 'firebase/app'
import 'firebase/analytics';
import { firebaseConfig, initFirebase } from '../content/firebase'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        initFirebase()
    }, [])

    return <Component {...pageProps} />
}