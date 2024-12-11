import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./features/HomePage/HomePage";
import CreateEditDetailForm from "./features/Detailpage/CreateEditDetailForm";
import CreateEditPostForm from "./features/PostPage/CreateEditPostForm";
import ListTable from "./features/ListTablePage/ListTable";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<CreateEditDetailForm />} />
        <Route path="/postform" element={<CreateEditPostForm />} />
        <Route path="/list" element={<ListTable />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
