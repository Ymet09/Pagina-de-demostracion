import "./App.css";
import Navbar from "./componentes/navbar/Navbar";
import InicioDeSecion from "./componentes/inicio_de_secion/inicio_de_secion";

function App() {
  return (
    <div className="body">
      <div className="container1 center2">
        <Navbar />
        <InicioDeSecion />
      </div>
    </div>
  );
}

export default App;
