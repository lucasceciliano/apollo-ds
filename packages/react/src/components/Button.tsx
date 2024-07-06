import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";
import { colorsSemantic } from "@apollo-ds/tokens";

export const Button = styled("button", {
  all: "unset",
  fontSize: "$bodySmall",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$space100",
  cursor: "pointer",
  padding: "0 $space-150",

  svg: {
    width: "$space-200",
    height: "$space-200",
  },

  "&:disabled": {
    color: "$blueSari500",
    cursor: "not-allowed",
  },


  "&:focus": {
    border: "2px solid $color$blueSpark300",

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: colorsSemantic.components.button.primary.backgroundDefault,

        "&:not(:disabled):hover": {
          background: colorsSemantic.components.button.primary.backgroundHover,
        },

        "&:disabled": {
          backgroundColor:
            colorsSemantic.components.button.primary.backgroundDisabled,
        },

  },
      },

      secondary: {
        color: "$blueSari800",
        background:
          colorsSemantic.components.button.secondary.backgroundDefault,

        "&:not(:disabled):hover": {
          background:
            colorsSemantic.components.button.secondary.backgroundHover,
        },

        "&:disabled": {
          backgroundColor:
            colorsSemantic.components.button.secondary.backgroundDisabled,
        },
      },

      tertiary: {
        color: "$blueSari800",
        border: "1px solid $blueSari300",

        "&:not(:disabled):hover": {
          border: "1px solid $blueSari500",
        },

        "&:disabled": {
          border: "1px solid $blueSar100",
        },
      },
    },

    size: {
      sm: {
        height: "$space500",
        borderRadius: "$sm",
      },

      md: {
        height: "$space600",
        borderRadius: "$md",
      },

      lg: {
        height: 56,
        borderRadius: "$md",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}
