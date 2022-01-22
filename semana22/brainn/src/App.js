import Routes from "./Routes/Routes";
import GlobalState from "./Global/GlobalState";

function App() {
  return (
    <GlobalState>
      <Routes />
    </GlobalState>
  );
}

export default App;
