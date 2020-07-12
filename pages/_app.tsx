import '../style/global.scss'
import * as firebase from 'firebase/app'
import 'firebase/analytics';
import { firebaseConfig } from '../content/firebase'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log(firebase.apps)
        }
        firebase.analytics()
    }, [])

    return <Component {...pageProps} />
}