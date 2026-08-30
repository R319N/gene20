"use client"
import { Share_Tech } from 'next/font/google'
import borders from '../../base/borders'
import colors from '../../base/colors'
import typography from '../../base/typography'
import pxToRem from '../../functions/pxToRem'

const { fontWeightMedium, size } = typography
const { borderRadius } = borders
const { text } = colors

const shareTech = Share_Tech({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const root = {
  fontFamily: shareTech.style.fontFamily,
  color: text.main,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: size.md,
  textTransform: 'capitalize',
  fontWeight: fontWeightMedium,
  borderRadius: borderRadius.xxl,
  padding: `${pxToRem(10)} ${pxToRem(20)}`,
  borderRadius: pxToRem(10),
  lineHeight: 1.4,
  textAlign: 'center',
  userSelect: 'none',
  backgroundColor:"transparent",
  backgroundSize: '150% !important',
  backgroundPositionX: '25% !important',
  transition: 'all 150ms ease-in',

  '&:disabled': {
    pointerEvent: 'none',
    opacity: 0.65
  },

  '& .material-icons': {
    fontSize: pxToRem(18),
    marginTop: pxToRem(-2)
  }
}

export default root
