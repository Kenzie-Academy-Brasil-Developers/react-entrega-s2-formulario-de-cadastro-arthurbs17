import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const Form = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .max(18, "* 18 caracteres no máximo")
      .required("* Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "* Somente letras"
      ),
    email: yup
      .string()
      .required("Campo Obrigatório")
      .email("* E-mail inválido."),
    password: yup
      .string()
      .required("* Campo Obrigatório")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "* A senha deve conter: uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const handleForm = (data) => {
    console.log(data);
    history.push(`/user/${data.name}`);
  };
  return (
    <Grid container justifyContent="center">
      <Paper item elevation={5}>
        <h3>Faça seu Registro:</h3>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <TextField
              label="Nome"
              variant="outlined"
              size="small"
              color="primary"
              margin="dense"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </div>
          <div>
            <TextField
              label="E-mail"
              variant="outlined"
              size="small"
              color="primary"
              margin="dense"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>
          <div>
            <TextField
              label="Senha"
              variant="outlined"
              size="small"
              color="primary"
              margin="dense"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <div>
            <TextField
              label="Confirma senha"
              variant="outlined"
              size="small"
              color="primary"
              margin="dense"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </div>
          <Button type="submit" variant="contained" size="small">
            Enviar
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Form;
