import Image from 'next/image'
import React from 'react'
import logo from "@/public/images/logo-thumbnail.png"



const LogoThumbnail = () => {
  return (
   <span style={{display:"flex", alignItems: "center", justifyContent: "center" }}>
        <Image src={logo.src}
         alt="Gene20 Logo Thumbnail" width={100} height={30} />
   </span>
  )
}

export default LogoThumbnail