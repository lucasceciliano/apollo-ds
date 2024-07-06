import { TextInput, TextInputProps, Box, Text } from '@apollo-ds/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Components/Text Input',
    component: TextInput,
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

} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Input Value'
    },
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'https://',
        placeholder: 'you-username'
    }
}



