import { useState } from 'react'
import './FormUser.css'

function FormUser(){
    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setPassword] = useState('')

    async function cadastroUser(){
        
        if(name=== "" || email==="" || senha === ""){
            alert("Preencha todos os campos")
            return
        }
        
        // integrar com a vossa API

        let api = await fetch("http://localhost:8090/usuario/cadastrar",{
            method:"POST",
            body:JSON.stringify({
                "name":name,
                "email":email,
                "senha": senha
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        let resposta = await api.json()
        if(api.ok){
            alert("Cadastro done")
            window.location.href = ("http://localhost:3000/compra")
            return
        }

        alert("Erro ao fazer o cadastro!!");

    }

    return(
        <div>
            <body>
            <form>
                <h2>Cadastra-se</h2>
                <label htmlFor='name'>Nome:</label>
                <input 
                type='text' 
                id='name'
                name='name'
                onChange={(e)=> setNome(e.target.value)}
                /><br/>

                <label htmlFor='name'>Email:</label>
                <input 
                type='email' 
                id='email' 
                name='email'
                onChange={(e)=> setEmail(e.target.value)}
                /><br/>

                <label htmlFor='name'>Senha:</label>
                <input 
                type='password'
                id='senha' 
                name='senha'
                onChange={(e) => setPassword(e.target.value)}
                /><br/>
                        
                <input type='button' value="Cadastra-se" onClick={cadastroUser}/>
            </form>
            </body>
        </div>
    )
}

export default FormUser