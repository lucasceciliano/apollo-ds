import * as Checkbox from "@radix-ui/react-checkbox";
import { styled, keyframes } from "../../styles";
import { colorsSemantic } from "@apollo-ds/tokens";

export const CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$space300",
  height: "$space300",
  borderRadius: "$sm",
  backgroundColor: colorsSemantic.background.primary,
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: '2px solid $blueSari300',

  '&[data-state="checked"]': {
    backgroundColor: colorsSemantic.components.toggles.backgroundSelected,
  },

  '&:focus, &[data-state="checked"]': {
    border: "0px solid $blueSpark500",
  },
});

const slideIn = keyframes({
    from: {
        transform: "translateY(-100%)",
    },
    to: {
        transform: "translateY(0)",
    },
})

const slideOut = keyframes({
    from: {
        transform: "translateY(0)",
    },
    to: {
        transform: "translateY(-100%)",
    },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$space200",
  height: "$space200",

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },

});
