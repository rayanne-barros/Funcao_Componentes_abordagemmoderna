import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function DadosPessoais({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome]  = useState(""); 
    const [cpf, setCpf]  = useState(""); 
    const [promocoes, setPromocoes]  = useState(true); 
    const [novidades, setNovidades]  = useState(true); 
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}}) 
    
    return (
        <form
            onSubmit={(evento) => {
            evento.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
            }}
        >
            <TextField
                value={nome} 
                onChange={evento => { setNome(evento.target.value);                     
                }} 
             id="nome" label="Nome" variant="outlined" margin="normal" fullWidth
            />
              
            <TextField 
                value={sobrenome} 
                onChange={evento => { setSobrenome(evento.target.value);                    
                }} 
             id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
            
            <TextField 
                value={cpf} 
                onChange={evento => { setCpf(evento.target.value);                     
                }} 
               onBlur={(evento) => {
                   const eValido = validarCPF(cpf);
                   setErros({cpf: eValido})
               }}
               error={!erros.cpf.valido} helperText={erros.cpf.texto} id="CPF" label="CPF" variant="outlined" margin="normal" fullWidth />

            <FormControlLabel
             control= {<Switch checked={promocoes} onChange={(evento)=> { setPromocoes(evento.target.checked)}} name="promoções"  color="primary" /> } 
             label="Promoções" 
            />
            <FormControlLabel 
            control={<Switch checked={novidades} onChange={(evento)=> { setNovidades(evento.target.checked)}} name="novidades"  color="primary" />} 
            label="Novidades"
            />
           
            <Button variant="contained" color="primary" type="submit">
              Cadastrar 
            </Button>
        </form>
    );
}

export default DadosPessoais;