import React, { FC } from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    button: (props: { color: string }) => ({
        backgroundColor: props.color,
        border: "none",
        color: "white",
        padding: 20,
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        borderRadius: 5
    })
})

interface Props {
    /**
     * Called when button is clicked
     *
     * @default none
     */
    onClick?: () => void
    /**
     *  Sets the button's background color
     *
     * @default "blue"
     */
    color?: string
}

const Button: FC<Props> = ({ children, onClick, color }) => {
    const classes = useStyles({ color: color ? color : "blue" })
    return (
        <button className={classes.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
