import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Form from "./pages/Form";
import FormPost from "./pages/FormPost";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/postform" element={<FormPost />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
