import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../public/css/custom.css';
import '../public/css/global.css';
import '../public/css/plugin.css';
import '../public/css/templete.css';
//import '../public/css/skin-3.css';
import "swiper/css/bundle";
import Head from 'next/head';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../redux/store';
import { withRouter, Router } from 'next/router'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import MainLayout from '../components/layout/MainLayout';
import PageLayout from '../components/layout/PageLayout';
import TopNavBarComponent from '../components/navigation/TopNavBarComponent';
import MainNavBarComponent from '../components/navigation/MainNavBarComponent';
import FooterComponent from '../components/footer/FooterComponent';

Router.events.on('routeChangeStart', (url) => {
    //console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
function MyApp({ Component, pageProps }) {
    const store = useStore((state) => state);
    return (
        <>
            <PersistGate persistor={store.__persistor} >


                <MainLayout>
                    {/*nav*/}
                    
                    <MainNavBarComponent />

                    {/*<NavBarComponent/>*/}
                    <PageLayout>
                        <Component {...pageProps} />
                    </PageLayout>
                    <FooterComponent />
                </MainLayout>
            </PersistGate>
        </>
    )
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps: pageProps };
}
export default withRouter(wrapper.withRedux(MyApp))