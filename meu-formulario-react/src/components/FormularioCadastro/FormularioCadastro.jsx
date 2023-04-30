import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")

  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault()
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.targe.value)
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.targe.value)
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <FormControlLabel 
        label="Novidades"
        control={<Switch name="novidades" defaultChecked color="primary" />}
      />      

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;

/** validação, n linha abaixo do onChange:
 * let tmpCPF = event.targe.value
 * if (tmpCPF.length >= 11){
 *  tmpCPF = tmpCPF.subtr(0, 11)
 * }
 *  setCPF(tmpCPF)
 */