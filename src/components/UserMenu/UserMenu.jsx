import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
import { selectUserEmail } from "../../redux/auth/auth-selectors";
import * as SC from "./UserMenu.styled";
import { Button } from "../Button/Button";
import { IoIosContact } from "react-icons/io";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <SC.UserMenu>
      <IoIosContact />
      <p>{email}</p>
      <Button type="button" actionHandler={() => dispatch(logOut())}>
        Вийти
      </Button>
    </SC.UserMenu>
  );
};
