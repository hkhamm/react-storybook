import { configure, addDecorator } from "@storybook/react"
// @ts-ignore
import { withInfo } from "@storybook/addon-info"

addDecorator(withInfo)

// automatically import all files ending in *.stories.tsx
configure(require.context("../src", true, /.stories.(tsx)$/), module)
