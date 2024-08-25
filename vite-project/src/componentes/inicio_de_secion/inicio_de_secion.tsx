// import "./incio_de_secion.css";

function InicioDeSecion() {
  return (
    <div id="part1-1">
      <h1>Inicio de secion</h1>
      <br />
      <form method="POST">
        <div>
          <label>correo elctronico</label>
          <input id="part2-1" type="email" required></input>
        </div>
        <div>
          <label>contraseña</label>
          <input id="part2-1" type="email" required></input>
        </div>
        <div>
          <button type="submit" id="part3-1">
            entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default InicioDeSecion;
