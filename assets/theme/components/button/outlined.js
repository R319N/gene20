"use client"
import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'
import rgba from '../../functions/rgba'

const { white, text, secondary } = colors
const { size} = typography

const outlined = {
  base: {
    color: text.primary,
    borderColor: rgba(text.primary, 0.2),
    transition: '1s background all ease',
    backgroundColor: "#001a421a",
    backdropFilter: "blur(10px)",

    '&:hover': {
      borderColor: rgba(text.primary, 0.5),
      color: white.primary
    },

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(24)} !important`,
    }
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(12)} !important`
    }
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(22)} !important`
    }
  },

  primary: {

    '&:hover': {
      backgroundColor: "#001a4296",
      borderColor: rgba(text.primary, 0.1)
    }
  },

  secondary: {
    backgroundColor: "transparent",
    borderColor: secondary.main,

    '&:hover': {
      backgroundColor: "transparent"
    }
  }
}

export default outlined
