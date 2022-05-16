import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../assets/images/logoDesktop.png";

import { AnimationContainer, Background, Container, Content } from "./styles";

import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/userSignIn/thunks";
import { useHistory, Redirect } from "react-router-dom";

function Login() {
  const [error, setError] = useState(false);
  const history = useHistory()

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const route = () => {
     history.push("/home");
  }

  const onSubmit = (data) => {
    dispatch(signInThunk(data));
    route()
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              <img src={Logo} alt={Logo}></img>
              <h2>MY PLANT</h2>
              <h3>Busque, conheça, cuide!</h3>
            </section>
            <h4>Já possui uma conta?</h4>
            <Input
              icon={FiMail}
              placeholder="Seu email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              icon={FiLock}
              placeholder="Sua senha"
              type="password"
              name="password"
              register={register}
              error={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
            <p>Ainda não possui conta?</p>
            <Link to="/">
              <Button GreenSchema>Cadastrar</Button>
            </Link>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
