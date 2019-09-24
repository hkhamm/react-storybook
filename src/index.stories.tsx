import React from "react"
import { storiesOf } from "@storybook/react"

export default { title: "Button" }

export const withText = () => <button>Hello Button</button>

export const withEmoji = () => (
    <button>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </button>
)

storiesOf("button", module)
    .add("with text", () => <button>Hello Button</button>)
    .add("with emoji", () => (
        <button>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </button>
    ))
