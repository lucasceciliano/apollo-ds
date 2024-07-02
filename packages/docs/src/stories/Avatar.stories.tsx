import { Avatar, AvatarProps } from '@apollo-ds/react'
import { StoryObj, Meta } from '@storybook/react'


export default {
    title: 'Components/Avatar',
    component: Avatar,

    args: {
        src: 'https://img.freepik.com/fotos-premium/incrivel-deus-grego-do-sol-apolo-dos-saudaveis-e-dos-loucos_924723-2339.jpg',
        alt: 'Apollo',
        variant: 'sm'
    },

    argTypes: {
        variant: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
             },
        },

        src: {
            control: {
                type: 'text'
            }
        }
    }

} as Meta<AvatarProps>

export const Small: StoryObj<AvatarProps> = {
    
}


export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}


