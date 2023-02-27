import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppRouter/>
    </Router>
  );
}

export default App;
