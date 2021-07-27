import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuarios({aoEnviar}){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return (
        <form onSubmit={(evento) => {
            evento.preventDefault()
            aoEnviar({email, senha})
        }} > 
            <TextField 
             value={email}
             onChange={(evento)=> { setEmail(evento.target.value)}}
             id="email" 
             label="Email" 
             type="email" 
             required 
             variant="outlined" 
             margin="normal" 
             fullWidth
            />
            <TextField 
             value={senha}
             onChange={(evento)=> { setSenha(evento.target.value)}}
             id="senha" 
             label="Senha" 
             type="password" 
             required  
             variant="outlined" 
             margin="normal" 
             fullWidth
            />
            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>

    );
}

export default DadosUsuarios;