import { Checkbox, CheckboxProps, Box, Text } from '@apollo-ds/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (
            <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$space100'}}
            >
                {Story()}
                <Text size="sm">Accept terms of use</Text>
            </Box>
            )
        }
    ],

} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {

}





