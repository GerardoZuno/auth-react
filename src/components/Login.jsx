import React, {useState} from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)


    const procesarDatos = (e) =>  {
        e.preventDefault()
        if(!email.trim()){
            //console.log('Ingrese un email')
            setError('Ingrese un email')
            return
        }
        if(!password.trim()){
           // console.log('esta vacio password')
            setError('Ingrese el password')
            return
        }
        if(password.length < 6) {
            //console.log('ingrese 6 caracteres')
            setError('Ingrese 6 caracteres')

            return
        }

        console.log('sucess')
        setError(null)

    }
    return (
        <div className="mt-5">
            <h3 className="text center">Registro de usuarios</h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                   <form onSubmit={procesarDatos}>
                       {
                           error && (
                               <div className='alert alert-danger'>
                                   {error}
                               </div>
                           )
                       }
                      <input type="email"
                       className="form-control mb-2"
                       placeholder="Ingrese un email"
                       onChange={e => setEmail(e.target.value)}
                       value={email}
                       />
                       <input type="password"
                       className="form-control mb-2"
                       placeholder="Ingrese el password"
                       onChange={e => setPassword(e.target.value)}
                       value={password}
                       />
                       <button  className="btn btn-dark btn-lg btn-block">
                           Registrarse
                       </button>
                       <button className="btn btn-info btn-sm btn-block">
                           Ya tienes cuenta?
                       </button>
                   </form>
                </div>
            </div>

            
        </div>
    )
}

export default Login
