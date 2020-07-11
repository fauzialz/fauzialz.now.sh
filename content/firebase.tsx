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
    screen_view: 'screen_view',
    view_item: 'view_item'
}

export const initFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics()
    }
    // return firebase
}

export const useLogEvent = (event: string, eventParams?: { [key: string]: any }) => firebase.analytics().logEvent(event, eventParams)

export const PageLogEvent = ({children} : {children: ReactNode}) => {
    let route = useRouter()
    let pages = route.pathname.split('/')
    let pageName = pages[pages.length - 1]? pages[pages.length - 1] : 'home'
    
    useEffect(() => {
        setTimeout(() => {
            firebase.analytics().logEvent(firebaseEvent.screen_view, { screen_name : pageName})
        }, 100);
    }, [])

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}