import React, {useEffect, useState} from 'react'
import {auth} from '../firebase'
import {withRouter} from "react-router-dom"
import Firestore from './Firestore'


function Admin({history}) {
    
    const [user, setUser] = useState(null)
    
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(async() => {
        if(auth.currentUser){
           console.log('usuario logeado')
           setUser(auth.currentUser)
        } else {
            console.log('usuario no logeado')
            history.push('/login')
        }
       /*try {
           const response = await
       }catch(err) {
           console.log(err)
       }*/
    }, [history])

    return (
        <div>
           
            {
                user && (
                    <Firestore user={user}/>
                    
                )
            }
        </div>
    )
}

export default withRouter   (Admin)
