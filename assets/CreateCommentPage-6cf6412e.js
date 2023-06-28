import{s as a,u as g,r,j as t}from"./index-52148391.js";function w(e){var n=e.value;e.value="",e._baseScrollHeight=e.scrollHeight,e.value=n}const f=({target:e})=>{if(!(!e.classList.contains("autoExpand")||!e.nodeName=="TEXTAREA")){var n=e.getAttribute("data-min-rows")|0,s;!e._baseScrollHeight&&w(e),e.rows=n,s=Math.ceil((e.scrollHeight-e._baseScrollHeight)/16),e.rows=n+s}},b=a.main`
  display: block;
  width: 100%;
  min-height: 100%;
`,j=a.section`
  display: block;
  max-width: 1600px;
  padding: 64px 0px;
`,y=a.div`
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
`,C=a.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-width: 90%;
  padding: 16px;
  border: 1px solid rgb(57, 147, 243);
  border-radius: 5px;

  @media screen and (min-width: 480px) {
    /* min-width: 70%; */
    padding: 32px;
  }

  @media screen and (min-width: 768px) {
    min-width: 600px;
  }

  & > button {
    width: 50%;
  }
`,d=a.label`
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
`,c=a.textarea`
  resize: none;
  width: 65%;
  border: 1px solid black;
  border-radius: 3px;
  margin-left: auto;
  padding: 4px;
`,E=a.p`
  text-align: center;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  font-size: 12px;
  margin-top: 24px;
  margin-bottom: 24px;
  color: red;
`;document.addEventListener("input",f);function S(){g();const[e,n]=r.useState(""),[s,l]=r.useState(""),[x,p]=r.useState(""),[h,u]=r.useState(""),i=({target:{name:m,value:o}})=>{switch(m){case"token":return n(o);case"message":return l(o);case"newMessage":return p(o);case"channelsList":return u(o);default:return}};return t.jsx(b,{children:t.jsx(j,{children:t.jsx(y,{children:t.jsxs(C,{children:[t.jsxs(d,{children:["Токен",t.jsx(c,{className:"autoExpand",type:"text",rows:2,"data-min-rows":2,placeholder:"Поле обов'язкове",name:"token",value:e,onChange:i,autoFocus:!0})]}),t.jsxs(d,{children:["Повідомлення",t.jsx(c,{className:"autoExpand",type:"text",rows:2,"data-min-rows":2,placeholder:"Поле обов'язкове",name:"message",value:s,onChange:i,autoFocus:!0})]}),t.jsxs(d,{children:["Нове повідомлення",t.jsx(c,{className:"autoExpand",type:"text",rows:2,"data-min-rows":2,placeholder:"Поле обов'язкове",name:"newMessage",value:x,onChange:i,autoFocus:!0})]}),t.jsxs(E,{children:["Увага! ",t.jsx("br",{}),"Список телеграм-каналів обов'язково необхідно вводити через кому"]}),t.jsxs(d,{children:["Телеграм-канали",t.jsx(c,{className:"autoExpand",type:"text",rows:2,"data-min-rows":2,placeholder:"Поле обов'язкове",name:"channelsList",value:h,onChange:i,autoFocus:!0})]})]})})})})}export{S as default};
