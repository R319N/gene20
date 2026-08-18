import Image from 'next/image'
import React from 'react'

const LogoIconFull = () => {
    return (
        <span style={{ alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/logo-thumbnail.png" alt="Gene20 Logo Thumbnail" width={160} height={30} />
        </span>
    )
}

export default LogoIconFull