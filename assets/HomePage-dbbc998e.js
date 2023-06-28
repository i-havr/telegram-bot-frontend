import{s as e,u as h,r as p,j as t,B as u,I as f,l as g}from"./index-52148391.js";const w=e.main`
  display: block;
  width: 100%;
  min-height: 100%;
`,b=e.section`
  display: block;
  max-width: 1600px;
  padding: 64px 0px;
`,j=e.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;

  & > h1 {
    margin-bottom: 32px;
    font-size: 22px;
  }

  & > p {
    margin-top: 16px;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    & > h1 {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`,y=e.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-width: 180px;
  padding: 16px;
  border: 1px solid rgb(57, 147, 243);
  border-radius: 5px;

  @media screen and (min-width: 480px) {
    min-width: 300px;
    padding: 32px;
  }

  & > button {
    width: 50%;
  }
`,l=e.label`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #252f38;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`,c=e.input`
  width: 65%;
  border: 1px solid black;
  border-radius: 3px;
  margin-left: auto;
  padding: 4px;
`;function C(){const x=h(),[i,s]=p.useState(""),[a,o]=p.useState(""),r=({target:{name:n,value:d}})=>{switch(n){case"email":return s(d);case"password":return o(d);default:return}},m=n=>{n.preventDefault(),x(g({email:i,password:a})),s(""),o("")};return t.jsx(w,{children:t.jsx(b,{children:t.jsxs(j,{children:[t.jsx("h1",{children:"Будь ласка, авторизуйтеся"}),t.jsxs(y,{onSubmit:m,autoComplete:"off",children:[t.jsxs(l,{children:["Пошта",t.jsx(c,{type:"email",name:"email",value:i,onChange:r,autoFocus:!0})]}),t.jsxs(l,{children:["Пароль",t.jsx(c,{type:"password",name:"password",value:a,onChange:r})]}),t.jsx(u,{children:"Увійти"})]}),t.jsx(f,{})]})})})}export{C as default};
