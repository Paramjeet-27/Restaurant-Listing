import "./App.css";
import IndexProvider from "./contexts/indexContext";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <>
      <IndexProvider>
        <PageRoutes />
      </IndexProvider>
    </>
  );
}

export default App;
