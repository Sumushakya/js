import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./features/HomePage/HomePage";
import CreateEditDetailForm from "./features/Detailpage/CreateEditDetailForm";
import CreateEditPostForm from "./features/PostPage/CreateEditPostForm";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<CreateEditDetailForm />} />
        <Route path="/postform" element={<CreateEditPostForm />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
