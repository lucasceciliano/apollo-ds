import { styled } from "../../styles";
import * as Avatar from '@radix-ui/react-avatar';

export const AvatarContainer = styled(Avatar.Root, {
    borderRadius: '$full',
    display: 'inline-block',
    overflow: 'hidden',

    variants: {
        size: {
            sm: {
                width: '$space300',
                height: '$space300'
            },
            md: {
                width: '$space400',
                height: '$space400'
            },
            lg: {
                width: '$space500',
                height: '$space500'
            },
        }
    },

    defaultVariants: {
        size: 'sm'
    }

})

export const AvatarImage = styled(Avatar.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',

})

export const AvatarFallback = styled(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$blueSpark100',
    color: '$blueSpark400',

    svg: {
        width: '$space400',
        height: '$space400'
    },

})