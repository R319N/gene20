import React from "react";
import { WhatsApp } from "@mui/icons-material";
import RotatingCard from "../cards/RotatingCard";
import { styles } from "@/styles/styles";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';


interface WhatsAppProps {
  phoneNumber: number
}
const WhatsAppButton: React.FC<WhatsAppProps> = ({ phoneNumber }) => {
  return (
    <RotatingCard
      href={`https://wa.me/${phoneNumber}?text=Hie%20gene20`}
      ariaLabel="Message on WhatsApp"
    >
      <WhatsApp sx={{ ...styles.icons }} />
    </RotatingCard>
  );
};


export default WhatsAppButton;
