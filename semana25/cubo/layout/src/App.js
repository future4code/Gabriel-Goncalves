import FrontPage from "./FrontPage/FrontPage";
import GlobalState from "./Global/GlobalState";

function App() {
  return (
    <GlobalState>
      <FrontPage />
    </GlobalState>
  );
}

export default App;
