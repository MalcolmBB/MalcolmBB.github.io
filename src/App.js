import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/Pages/LoadingScreen/LoadingScreen'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import PastWork from './components/Pages/PastWork/PastWork'
import ContactMe from './components/Pages/ContactMe/ContactMe'
import PrivacyPolicy from './components/Pages/PrivacyPolicy/PrivacyPolicy'
import ScrollToTop from './scrollToTop'
import * as Realm from 'realm-web'

function App() {
    const [aboutInfo, setAboutInfo] = useState([])
    const [workList, setWorkList] = useState([])
    const [loading, setLoading] = useState(true)
    const [changePage, setChangePage] = useState(true)

    const changePageFunctionApp = (value) => {
        console.log('changePage', changePage)
        setChangePage(value)
    }

    const React_App_ID = 'malcolmportfolio-iccnw'

    useEffect(() => {
        async function getData() {
            const app = new Realm.App({ id: React_App_ID })
            await app.logIn(Realm.Credentials.anonymous())
            const client = app.currentUser.mongoClient('mongodb-atlas')
            const AboutInfoLoader = client
                .db('MalcolmPortfolio')
                .collection('AboutInfo')
            setAboutInfo(await AboutInfoLoader.find())
            const WorkListLoader = client
                .db('MalcolmPortfolio')
                .collection('WorkList')
            setWorkList(await WorkListLoader.find())

            app.currentUser.logOut()
            setLoading(false)
        }

        if (loading) {
            getData()
        }
    }, [loading])

    return (
        <Router basename={'/'}>
            <ScrollToTop />
            <React.Fragment>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={
                            <LoadingScreen
                                loading={loading}
                                changePageFunction={changePageFunctionApp}
                                goHome={true}
                            />
                        }
                    />
                    <Route
                        path="/Home"
                        exact
                        element={
                            (loading === true || changePage === false) ? (
                                <LoadingScreen
                                    loading={loading}
                                    changePageFunction={changePageFunctionApp}
                                    goHome={false}
                                />
                            ) : (
                                <Home WorkList={workList} />
                            )
                        }
                    />
                    <Route
                        path="/About"
                        exact
                        element={
                            (loading === true || changePage === false) ? (
                                <LoadingScreen
                                    loading={loading}
                                    changePageFunction={changePageFunctionApp}
                                    goHome={false}
                                />
                            ) : (
                                <About AboutInfo={aboutInfo} />
                            )
                        }
                    />
                    <Route
                        path="/Past-work"
                        exact
                        element={
                            (loading === true || changePage === false) ? (
                                <LoadingScreen
                                    loading={loading}
                                    changePageFunction={changePageFunctionApp}
                                    goHome={false}
                                />
                            ) : (
                                <PastWork WorkList={workList} />
                            )
                        }
                    />
                    <Route
                        path="/Contact-me"
                        exact
                        element={
                            (loading === true || changePage === false) ? (
                                <LoadingScreen
                                    loading={loading}
                                    changePageFunction={changePageFunctionApp}
                                    goHome={false}
                                />
                            ) : (
                                <ContactMe />
                            )
                        }
                    />
                    <Route
                        path="/Privacy-Policy"
                        exact
                        element={
                            (loading === true || changePage === false) ? (
                                <LoadingScreen
                                    loading={loading}
                                    changePageFunction={changePageFunctionApp}
                                    goHome={false}
                                />
                            ) : (
                                <PrivacyPolicy />
                            )
                        }
                    />
                </Routes>
            </React.Fragment>
        </Router>
    )
}

export default App
