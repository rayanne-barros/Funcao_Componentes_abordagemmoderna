import React from 'react';
import { Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro() {

    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth/>
              
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
            
            <TextField id="CPF" label="CPF" variant="outlined" margin="normal" fullWidth />

            <FormControlLabel
             control= {<Switch name="promoções" defaultChecked color="primary" /> } 
             label="Promoções" 
            />
            <FormControlLabel 
            control={<Switch name="novidades" defaultChecked color="primary" />} 
            label="Novidades"
            />
           
            <Button variant="contained" color="primary" type="submit">
              Cadastrar 
            </Button>
        </form>
    );
}

export default FormularioCadastro;