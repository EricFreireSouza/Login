import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = () => {
    if(!username || !email || !passwordConf || !password) {
      setError("Preencha todos os campos");
      return;
    }else if (password !== passwordConf) {
      setError("As senhas não são iguais");
      return;
    }

    const res = signup(username, email, password);

    if(res) {
      setError(res);
      return;
    }

    setSuccess("Usuário cadastrado com sucesso");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <C.Container>
      <C.Label>Cadastro</C.Label>
        <C.Content>
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={username}
            onChange={(e) => [setUsername(e.target.value), setError("")]}
          />
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
          <Input
            type="password"
            placeholder="Confirme sua password"
            value={passwordConf}
            onChange={(e) => [setPasswordConf(e.target.value), setError("")]}            
          />
          <C.LabelSuccess>{success}</C.LabelSuccess>
          <C.LabelError>{error}</C.LabelError>
          <Button Text="Cadastrar" onClick={handleSignup} />
          <C.LabelSignup>
            Já tem cadastro?
            <C.Strong>
              <Link to="/">&nbsp;Entre</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
    </C.Container>
  );
};

export default Signup;