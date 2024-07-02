import { TextArea, TextAreaProps, Box, Text } from '@apollo-ds/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Components/TextArea',
    component: TextArea,

    args: {},

    decorators: [
        (Story) => {
            return (
            <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$space100'}}>
                <Text size="sm">Label</Text>
                {Story()}
            </Box>
            )
        }
    ],

} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Add any observations'
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true,
    }
}


