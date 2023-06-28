import * as Styles from "./HomePage.styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function HomePage() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <p>HOME PAGE</p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
    // <SC.HomePage>
    //   <SC.Section>
    //     <SC.Container>
    //       <SC.Button>Hello there!</SC.Button>
    //     </SC.Container>
    //   </SC.Section>
    // </SC.HomePage>

    // <HomeStyled>
    //   <SectionStyled>
    //     <ContainerStyled>
    //       <ImageWrapper />
    //       <TextWrapperStyled>
    //         <p>
    //           Already with us?{" "}
    //           <LinkStyled to={"/login"}>
    //             <b>Log in!</b>
    //           </LinkStyled>
    //         </p>
    //         <p>
    //           Not yet?{" "}
    //           <LinkStyled to={"/register"}>
    //             <b>Sign up!</b>
    //           </LinkStyled>
    //         </p>
    //       </TextWrapperStyled>
    //     </ContainerStyled>
    //   </SectionStyled>
    // </HomeStyled>
  );
}
