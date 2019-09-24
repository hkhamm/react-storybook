import React from "react"
import Button from "./Button"
import { storiesOf } from "@storybook/react"

export const withText = () => <Button>Hello Button</Button>

export const withEmoji = () => (
    <Button>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
)

storiesOf("Button", module)
    .add("with text", withText, { info: { inline: true } })
    .add("with emoji", withEmoji, { info: { inline: true } })
