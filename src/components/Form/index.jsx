import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
  };
  return (
    <Grid>
      <Paper>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <TextField
              label="Nome"
              variant="outlined"
              size="small"
              color="primary"
              {...register("name")}
              error={!!errors}
              helperText={errors.name?.message}
            />
          </div>
          <div>
            <TextField
              label="E-mail"
              variant="outlined"
              size="small"
              color="primary"
              {...register("email")}
              error={!!errors}
              helperText={errors.email?.message}
            />
          </div>
          <Button type="submit">Enviar</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Form;
