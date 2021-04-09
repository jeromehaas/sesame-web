import { createGlobalStyle } from 'styled-components';;

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    scrollbar-width: none;
    font-family: 'Lato Thin', 'sans-serif';
    outline: none;
    margin: 0;
    padding: 0;
  }

  *::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
}

*::selection {
    background-color: rgba(176, 14, 35, 0.1);
}


body {
  /* overflow: hidden; */
}

img {
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

a {
  color: inherit;
  text-decoration: none;
}

  @font-face{
    font-family:"Lato Thin";
    src: 
      local('fonts/lato'), url("/fonts/lato/Lato-Thin.ttf") format("ttf"),
      local('fonts/lato'), url("/fonts/lato/Lato-Thin.woff") format("woff");
    font-display: block;
  }
  @font-face{
    font-family:"Lato Light";
    src: 
      local('fonts/lato'), url("/fonts/lato/Lato-Light.ttf") format("ttf"),
      local('fonts/lato'), url("/fonts/lato/Lato-Light.woff") format("woff");
    font-display: block;
  }
  @font-face{
    font-family:"Lato Regular";
    src: 
      local('fonts/lato'), url("/fonts/lato/Lato-Regular.ttf") format("ttf"),
      local('fonts/lato'), url("/fonts/lato/Lato-Regular.woff") format("woff");
    font-display: block;
  }
  @font-face{
    font-family:"Lato Bold";
    src: 
      local('fonts/lato'), url("/fonts/lato/Lato-Bold.ttf") format("ttf"),
      local('fonts/lato'), url("/fonts/lato/Lato-Bold.woff") format("woff");
    font-display: block;
  }

  `;

export default GlobalStyle;