import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./features/HomePage/HomePage";
import CreateEditDetailForm from "./features/Detailpage/CreateEditDetailForm";
import CreateEditPostListForm from "./features/PostPage/CreateEditPostListForm";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<CreateEditDetailForm />} />
        <Route path="/postform" element={<CreateEditPostListForm />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
