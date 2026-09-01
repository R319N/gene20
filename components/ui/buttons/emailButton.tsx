import RotatingCard from '@/components/ui/cards/RotatingCard'
import { styles } from '@/styles/styles'
import Mail from '@mui/icons-material/Mail'
import React from 'react'


interface EmailProps {
  emailAddress: string
}
const EmailButton: React.FC<EmailProps> = ({ emailAddress }) => {
  return (
    <RotatingCard href={`mailto:${emailAddress}`} ariaLabel="Send email">
      <Mail sx={{ ...styles.icons }} />
    </RotatingCard>
  )
}

export default EmailButton
