import RotatingCard from '@/components/ui/cards/RotatingCard'
import Phone from '@mui/icons-material/Phone'
import React from 'react'

interface Props {
  phoneNumber: string
}

const PhoneCallButton: React.FC<Props> = ({ phoneNumber }) => {
  return (
    <RotatingCard href={`tel:${phoneNumber}`}>
      <Phone sx={{ fontSize: '18px', color: '#0044bb' }} />
    </RotatingCard>
  )
}

export default PhoneCallButton
