import EmailButton from "@/components/ui/buttons/emailButton";
import PhoneCallButton from "@/components/ui/buttons/phoneButton";
import WhatsAppButton from "@/components/ui/buttons/whatsAppButton";
import { ReactNode } from "react";

interface Contact {
  name: string,
  details: string | number,
  component: ReactNode,
  link?: string
}

const contactDetailsdata: Contact[] = [
  {
    name: "email",
    details: "wilfredr319n@gmail.com",
    component: <EmailButton emailAddress="wilfredr319n@gmail.com" />,
  },
  {
    name: "cell contact",
    details: "+27612023165",
    component: <PhoneCallButton  phoneNumber="+27612023165" />,
  },

  {
    name: "whatsapp",
    details: "+27 61 202 3165",
    link: "https://wa.me/27612023165?text=Hie%20wilfred%20reign",
    component: <WhatsAppButton phoneNumber={27612023165} />,
  },
];

export default contactDetailsdata;
