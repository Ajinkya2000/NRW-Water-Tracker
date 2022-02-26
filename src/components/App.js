import { Routes, Route } from "react-router-dom";

// Components
import Auth from "./Auth/Auth";
import Dashboard from "./Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
