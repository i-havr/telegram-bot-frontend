import * as Styles from "./NotFoundPage.styled";
import Button from "@mui/material/Button";
import { ReactComponent as NotFoundIcon } from "../../assets/not-found.svg";

export default function NotFoundPage() {
  return (
    <Styles.NotFoundPage>
      <NotFoundIcon width="240" height="240" />
      <Styles.Title>Whoops, something went wrong :(</Styles.Title>
      <Styles.Text>Try starting from the home page</Styles.Text>
      <Styles.LinkStyled to={"/"}>
        <Button type="button">To home page</Button>
      </Styles.LinkStyled>
    </Styles.NotFoundPage>
  );
}
