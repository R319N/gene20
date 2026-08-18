"use client"
import { brotliCompress } from 'node:zlib'
import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'
import rgba from '../../functions/rgba'

// Material Dashboard 2 React Base Styles

const { text, info, secondary, primary, transparent } = colors
const { size, fontWeightMedium } = typography

const buttonText = {
  base: {
    backgroundColor: "transparent",
    minHeight: pxToRem(40),
    color: text.primary,
    boxShadow: 'none',
    lineHeight: 1,
    borderRadius: 0,
    padding: `${pxToRem(0)} ${pxToRem(0)}`,
      // borderBottom: `1px solid ${rgba(text.primary, 0.2)}`,

    '&:hover': {
      boxShadow: 'none'
    },

    '&:focus': {
      boxShadow: 'none'
    },

    '&:active, &:active:focus, &:active:hover': {
      opacity: 0.85,
      boxShadow: 'none'
    },

    '&:disabled': {
      boxShadow: 'none'
    },

    '& .material-icon, .material-icons-round, svg': {
      fontSize: `${pxToRem(24)} !important`,
      color: text.primary,
      transition: 'all 0.2s ease-in-out',
    },
    "&:hover .material-icon, &:hover .material-icons-round, &:hover svg": {
      transform: 'translateX(4px)',
      color: primary.main,
    },
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
    color: text.primary,
  

    '&:hover': {
      color: text.primary
    },

    '&:focus:not(:hover)': {
      color: primary.main,
      boxShadow: 'none'
    }
  },

  secondary: {
    color: secondary.main,

    '&:hover': {
      color: secondary.main
    },

    '&:focus:not(:hover)': {
      color: secondary.focus,
      boxShadow: 'none'
    }
  }
}

export default buttonText
