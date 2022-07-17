import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

function Signin() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, password);

    if(res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
      <C.Container>
        <C.Title>Login</C.Title>
        <C.Content>
          <Input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua password"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}            
          />
          <C.LabelError>{error}</C.LabelError>
          <Button Text="Entrar" onClick={handleLogin} />
          <C.LabelSignup>
            Não tem cadastro?
            <C.Strong>
              <Link to="/cadastrar">&nbsp;Cadastre-se</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </C.Container>
  );
};

export default Signin;