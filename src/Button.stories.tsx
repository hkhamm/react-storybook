import React from "react"
import Button from "./Button"
import { text } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"

export default {
    title: "Button",
    parameters: {
        info: { inline: true }
    }
}

export const withText = () => (
    <Button color={text("Color", "blue")} onClick={action("onClick")}>
        {text("Label", "Hello Button")}
    </Button>
)

export const withEmoji = () => (
    <Button color={text("Color", "blue")} onClick={action("onClick")}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
)
