import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles";

import { Navbar } from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { TodoContext } from "./context/todoContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <TodoContext>
          <Navbar />
          <Routes></Routes>
        </TodoContext>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
