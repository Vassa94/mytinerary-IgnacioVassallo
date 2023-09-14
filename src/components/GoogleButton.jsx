import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const GoogleButton = ({ onSubmitGoogle  }) => {

   const Login = useGoogleLogin({

        onSuccess: async tokenResponse => {
            console.log(tokenResponse)
            
            const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo',{
                headers: {
                    Authorization: "Bearer " + tokenResponse.access_token
                }
            })
            onSubmitGoogle(data); 
            console.log(data);
        }
   })

  return (
    <div className="d-flex justify-content-center align-items-center">
        <div onClick={()=>Login()} className='g-button d-flex justify-content-center align-items-center'>
            <i className="fa-brands fa-google" ></i>
        </div>
    </div>
  )
}

export default GoogleButton