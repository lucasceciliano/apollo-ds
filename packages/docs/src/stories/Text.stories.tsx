import { Text, TextProps } from '@apollo-ds/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        size: 'bodyLarge',
        children: 
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corpost? Repellendus amet repudiandae ratione, sint illum numquam non recusandae? Dolores delectus dolorem odio error.'
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
                'bodyLarge',
                'bodyMedium',
                'bodySmall',
                'caption',
                'overlineLarge',
                'overlineSmall',
                'actionLarge',
                'actionMedium',
                'actionSmall',
                'utilityDisplay',
                'utilityHeading',
                'utilityContentLarge',
                'utilityContentMedium',
                'utilityContent',
            ],
            control: {
               type: 'inline-radio',
            },
        },
    }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong',
    }
}


