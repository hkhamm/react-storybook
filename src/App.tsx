import React from "react"
import logo from "./logo.svg"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    app: {
        textAlign: "center"
    },
    appLogo: {
        height: "40vmin"
    },
    appHeader: {
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white"
    },
    appLink: {
        color: "#09d3ac"
    }
})

const App: React.FC = () => {
    const classes = useStyles()
    return (
        <div className={classes.app}>
            <header className={classes.appHeader}>
                <img src={logo} className={classes.appLogo} alt="logo" />
                <a className={classes.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
