// import "./App.css";
// import FileDropZone from "./FileDropZone";

import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import ViewDetails from "./components/ViewDetails";
// import UserTable from "./components/UserTable";

function App() {
  return (
    <div>
      {/* <FileDropZone /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id" element={<ViewDetails />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
