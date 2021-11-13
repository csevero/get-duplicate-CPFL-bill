import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: Poppins, Segoe UI;
  background: #def9ea;
}

* {
  box-sizing: border-box;
}

h1 {
  font-size: 24px;
}

h3 {
  font-size: 20px;
}

button, p, span, input {
  font-size: 18px;
}

sub {
  font-size: 14px;
  color: #2f2f2f;
}

input, textarea, button {
  font-family: Poppins, Segoe UI;
}
`
