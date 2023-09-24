import React, { useCallback } from 'react'
import GoogleIcon from '../public/images/svg/googleIcon'

// import GoogleButton from "react-google-button";

function GoogleLoginComponent({ styles }) {
  const openGoogleLoginPage = useCallback(() => {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth'

    const scope = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' ')

    const params = {
      response_type: 'code',
      client_id:
        '49205130264-knss54ds96aefq2c6vrq4ml276e3ltqg.apps.googleusercontent.com',
      redirect_uri: 'https://api.haalekhoob.net/users/google/',
      prompt: 'select_account',
      access_type: 'offline',
      scope,
    }

    const urlParams = new URLSearchParams(params).toString()

    window.location = `${googleAuthUrl}?${urlParams}`
  }, [])

  return (
    <button
      type="button"
      className={`${styles} w-full h-[40px] bg-[#F9F9F9]  flex items-center  justify-center text-black font-[600] mt-[16px] mb-[16px]`}
      onClick={openGoogleLoginPage}
    >
      <GoogleIcon />
      <p className="mt-[4px]">ورود با گوگل</p>
    </button>
  )
}

export default GoogleLoginComponent
