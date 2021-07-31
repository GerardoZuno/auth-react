import React, {useState} from 'react'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const procesarDatos = (e) =>  {
        e.preventDefault()
        if(!email.trim()){
            console.log('esta vacio email')
            return
        }
        if(!password.trim()){
            console.log('esta vacio password')
            return
        }
        if(password.length < 6) {
            console.log('ingrese 6 caracteres')
            return
        }

        console.log('sucess')

    }
    return (
        <div className="mt-5">
            <h3 className="text center">Registro de usuarios</h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                   <form onSubmit={procesarDatos}>
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
