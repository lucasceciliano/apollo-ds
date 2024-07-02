import { Heading, HeadingProps } from '@apollo-ds/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Typography/Heading',
    component: Heading,

    args: {
        size: 'heading4',
        children: 
            'This is a simple title'
    },

    argTypes: {
        size: {
            options: [
                'displayLarge',
                'displaySmall', 
                'heading1',
                'heading2',
                'heading3',
                'heading4',
                'heading5',
                'heading6',
            ],
            control: {
               type: 'inline-radio',
            },
        },
    }

} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'Strong text',
        as: 'h1',
    },

    parameters: {
        docs: {
            description: {
                story: 
                    'Por padrão o heading sempre será um `h2`, entretanto podemos alterar isso com a propety `as`'
            },
        },
    },
}


