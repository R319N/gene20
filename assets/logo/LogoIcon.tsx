import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/logo.png"


const LogoIcon = () => {
  return (
   <span style={{ alignItems: "center", justifyContent: "center" }}>
           <Image src={logo.src}
            alt="Gene20 Logo Thumbnail" width={40} height={40} />
      </span>
  )
}

export default LogoIcon