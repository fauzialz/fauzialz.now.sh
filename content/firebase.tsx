import * as firebase from 'firebase/app'
import 'firebase/analytics';
import { useRouter } from 'next/router';
import { useEffect, ReactNode, Fragment } from 'react';

export const firebaseConfig = {
    apiKey: "AIzaSyA8q-LHXLxeAEKW48OaAEqYT1Xc3A1l1u4",
    authDomain: "fauzialz.firebaseapp.com",
    databaseURL: "https://fauzialz.firebaseio.com",
    projectId: "fauzialz",
    storageBucket: "fauzialz.appspot.com",
    messagingSenderId: "974972572366",
    appId: "1:974972572366:web:f57aa30a7ded6dc9d1f69f",
    measurementId: "G-59Z1XXL7LH"
};

export const firebaseEvent = {
    RESUME: 'print_resume'
}

export const initFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log(firebase.apps)
    }
    firebase.analytics()
}

export const useLogEvent = (event: string) => firebase.analytics().logEvent(event)

export const PageLogEvent = ({children} : {children: ReactNode}) => {
    let route = useRouter()
    let pages = route.pathname.split('/')
    let pageName = pages[pages.length - 1]? pages[pages.length - 1] : 'home'
    
    useEffect(() => {
        initFirebase()
        firebase.analytics().logEvent(`visit_${pageName}`)
    }, [])

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}