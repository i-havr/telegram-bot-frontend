import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUserEmail } from "../../redux/auth/auth-selectors";

import { log } from "../../redux/comment/comment-operations";
import { SendBtn } from "../../components/Button/SendBtn";

import { onExpandableTextareaInput } from "../../helpers/auto-expanding-textarea";

import * as SC from "./CreateCommentPage.styled";

document.addEventListener("input", onExpandableTextareaInput);

export default function CreateCommentPage() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  const [telegramToken, setTelegramToken] = useState("");
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [channelsList, setChannelsList] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "telegramToken":
        return setTelegramToken(value);
      case "message":
        return setMessage(value);
      case "newMessage":
        return setNewMessage(value);
      case "channelsList":
        return setChannelsList(value);
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SEND MESSAGE!");

    dispatch(log({ email, telegramToken, message, newMessage, channelsList }));
    // setEmail("");
    // setPassword("");
  };

  return (
    <SC.CreateCommentPage>
      <SC.Section>
        <SC.Container>
          <SC.Form onSubmit={handleSubmit} autoComplete="off">
            <SC.Label>
              Токен
              <SC.Textarea
                className="autoExpand"
                type="text"
                rows={2}
                data-min-rows={2}
                placeholder="Поле обов'язкове"
                name="telegramToken"
                value={telegramToken}
                onChange={handleChange}
                autoFocus
              />
            </SC.Label>
            <SC.Label>
              Повідомлення
              <SC.Textarea
                className="autoExpand"
                type="text"
                rows={2}
                data-min-rows={2}
                placeholder="Поле обов'язкове"
                name="message"
                value={message}
                onChange={handleChange}
                autoFocus
              />
            </SC.Label>
            <SC.Label>
              Нове повідомлення
              <SC.Textarea
                className="autoExpand"
                type="text"
                rows={2}
                data-min-rows={2}
                placeholder="Поле обов'язкове"
                name="newMessage"
                value={newMessage}
                onChange={handleChange}
                autoFocus
              />
            </SC.Label>

            <SC.Text>
              Увага! <br />
              Список телеграм-каналів необхідно вводити через кому
            </SC.Text>
            <SC.Label>
              Телеграм-канали
              <SC.Textarea
                className="autoExpand"
                type="text"
                rows={2}
                data-min-rows={2}
                placeholder="Поле обов'язкове"
                name="channelsList"
                value={channelsList}
                onChange={handleChange}
                autoFocus
              />
            </SC.Label>
            <SendBtn>Відправити</SendBtn>
          </SC.Form>
        </SC.Container>
      </SC.Section>
    </SC.CreateCommentPage>
  );
}
