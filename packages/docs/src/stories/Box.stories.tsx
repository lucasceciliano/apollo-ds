import { Box, BoxProps, Text } from '@apollo-ds/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Surfaces/Box',
    component: Box,

    args: {
        children: <Text>Componente Box</Text>
    }

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    
}

