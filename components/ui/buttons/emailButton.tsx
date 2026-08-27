import pxToRem from '@/assets/theme/functions/pxToRem'
import RotatingCard from '@/components/ui/cards/RotatingCard'
import Mail from '@mui/icons-material/Mail'
import React from 'react'


interface EmailProps {
  emailAddress: string
}
const EmailButton: React.FC<EmailProps> = ({ emailAddress }) => {
  return (
    <RotatingCard href={`mailto:${emailAddress}`}>
      <Mail sx={{ fontSize: pxToRem(32) }} />
    </RotatingCard>
  )
}

export default EmailButton
