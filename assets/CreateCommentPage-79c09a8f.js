import{j as t,S as f,P as l,s,r}from"./index-85386fca.js";const x=({type:e="submit",children:n,actionHandler:a})=>t.jsx(f,{type:e,onClick:a,children:n});x.propTypes={type:l.string,children:l.string.isRequired,actionHandler:l.func};function b(e){var n=e.value;e.value="",e._baseScrollHeight=e.scrollHeight,e.value=n}const j=({target:e})=>{if(!(!e.classList.contains("autoExpand")||!e.nodeName=="TEXTAREA")){var n=e.getAttribute("data-min-rows")|0,a;!e._baseScrollHeight&&b(e),e.rows=n,a=Math.ceil((e.scrollHeight-e._baseScrollHeight)/16),e.rows=n+a}},y=s.main`
  display: block;
  width: 100%;
  min-height: 100%;
`,C=s.section`
  display: block;
  max-width: 1600px;
  padding: 64px 0px;
`,S=s.div`
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
`,E=s.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-width: 90%;
  padding: 16px;
  border: 1px solid rgb(57, 147, 243);
  border-radius: 5px;

  @media screen and (min-width: 480px) {
    padding: 32px;
  }

  @media screen and (min-width: 768px) {
    min-width: 600px;
  }

  & > button {
    width: 50%;
  }
`,d=s.label`
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
`,c=s.textarea`
  resize: none;
  width: 65%;
  border: 1px solid black;
  border-radius: 3px;
  margin-left: auto;
  padding: 4px;
`,v=s.p`
  text-align: center;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  font-size: 12px;
  margin-top: 12px;
  margin-bottom: 24px;
  color: red;
`;document.addEventListener("input",j);function T(){const[e,n]=r.useState(""),[a,p]=r.useState(""),[u,h]=r.useState(""),[g,m]=r.useState(""),i=({target:{name:w,value:o}})=>{switch(w){case"token":return n(o);case"message":return p(o);case"newMessage":return h(o);case"channelsList":return m(o);default:return}};return t.jsx(y,{children:t.jsx(C,{children:t.jsx(S,{children:t.jsxs(E,{children:[t.jsxs(d,{children:["Поле 1",t.jsx(c,{className:"autoExpand",type:"text",rows:2,"data-min-rows":2,placeholder:"Поле обов'язкове",name:"token",value:e,onChange:i,autoFocus:!0})]}),t.jsxs(d,{children:["Повідомлення",t.jsx(c,{className:"autoExpand",type:"text",rows:2,"data-min-rows":2,placeholder:"Поле обов'язкове",name:"message",value:a,onChange:i,autoFocus:!0})]}),t.jsxs(d,{children:["Нове повідомлення",t.jsx(c,{className:"autoExpand",type:"text",rows:2,"data-min-rows":2,placeholder:"Поле обов'язкове",name:"newMessage",value:u,onChange:i,autoFocus:!0})]}),t.jsxs(v,{children:["Увага! ",t.jsx("br",{}),"Список телеграм-каналів необхідно вводити через кому"]}),t.jsxs(d,{children:["Телеграм-канали",t.jsx(c,{className:"autoExpand",type:"text",rows:2,"data-min-rows":2,placeholder:"Поле обов'язкове",name:"channelsList",value:g,onChange:i,autoFocus:!0})]}),t.jsx(x,{children:"Відправити"})]})})})})}export{T as default};
