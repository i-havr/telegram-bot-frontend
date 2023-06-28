import { useState } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { logIn } from "../../redux/auth/auth-operations";
import * as SC from "./HomePage.styled";
import { Button } from "../../components/Button/Button";

export default function HomePage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <SC.HomePage>
      <SC.Section>
        <SC.Container>
          <h1>Будь ласка, авторизуйтеся</h1>

          <SC.Form onSubmit={handleSubmit} autoComplete="off">
            <SC.Label>
              Пошта
              <SC.Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                autoFocus
              />
            </SC.Label>

            <SC.Label>
              Пароль
              <SC.Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </SC.Label>

            <Button>Увійти</Button>
          </SC.Form>
          <Toaster />
        </SC.Container>
      </SC.Section>
    </SC.HomePage>
  );
}
