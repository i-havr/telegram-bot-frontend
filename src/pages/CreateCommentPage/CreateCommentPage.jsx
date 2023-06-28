import { useState } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
// import { logIn } from "../../redux/auth/auth-operations";
import { Button } from "../../components/Button/Button";

import { onExpandableTextareaInput } from "../../helpers/auto-expanding-textarea";

import * as SC from "./CreateCommentPage.styled";

document.addEventListener("input", onExpandableTextareaInput);

export default function CreateCommentPage() {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [channelsList, setChannelsList] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "token":
        return setToken(value);
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
  return (
    <SC.CreateCommentPage>
      <SC.Section>
        <SC.Container>
          <SC.Form>
            <SC.Label>
              Токен
              <SC.Textarea
                className="autoExpand"
                type="text"
                rows={2}
                data-min-rows={2}
                placeholder="Поле обов'язкове"
                name="token"
                value={token}
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
              Список телеграм-каналів обов'язково необхідно вводити через кому
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
          </SC.Form>
        </SC.Container>
      </SC.Section>
    </SC.CreateCommentPage>
  );
}
