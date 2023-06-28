import { useSelector } from "react-redux";
import { UserMenu } from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/auth-selectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <nav>{!isLoggedIn ? <UserMenu /> : null}</nav>;
};
