import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import TemporaryDrawer from "./pages/Practice/TemporaryDrawer";
{/* import Login from "./pages/Login/Index"; */}

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa/>
      {/* <Login /> */}
      <TemporaryDrawer/>
    </div>
  );
}

export default App;
