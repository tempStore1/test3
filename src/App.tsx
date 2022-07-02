import { useRoutes } from "react-router-dom";
import BaseRouter from "./router";

const App: React.FC = () => {
  const elements = useRoutes(BaseRouter);
  return elements;
};

export default App;
