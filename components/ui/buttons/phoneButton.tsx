import RotatingCard from '@/components/ui/cards/RotatingCard'
import { styles } from '@/styles/styles'
import Phone from '@mui/icons-material/Phone'
import React from 'react'

interface Props {
  phoneNumber: string
}

const PhoneCallButton: React.FC<Props> = ({ phoneNumber }) => {
  return (
    <RotatingCard href={`tel:${phoneNumber}`} ariaLabel="Call phone number">
      <Phone sx={{ ...styles.icons }} />
    </RotatingCard>
  )
}

export default PhoneCallButton
