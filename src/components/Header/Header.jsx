import * as SC from "./Header.styled";
import { Navigation } from "../Navigation/Navigation";

import { IconContext } from "react-icons";
import { BiLogoTelegram } from "react-icons/bi";

export const Header = () => {
  return (
    <SC.Header>
      <SC.HeaderContent>
        <SC.LinkStyled to={"/"}>
          <IconContext.Provider value={{ color: "rgb(255, 215, 0)" }}>
            <BiLogoTelegram size={32} />
          </IconContext.Provider>
          <b>ПАЛЯНИЦЯ</b>
        </SC.LinkStyled>
        <Navigation />
      </SC.HeaderContent>
    </SC.Header>
  );
};
