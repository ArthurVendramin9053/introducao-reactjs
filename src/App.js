import './App.css';

function Titulo() {
  return (
    <>
    <br/><br/>
      <h2>Arthur Vendramin</h2>
      <p>
        Meu nome é Arthur Vendramin, curso técnico em <b>desnvolvimento de sistemas</b>, moro em Guaramirim SC
      </p>
      <br/>
    </>
  );
}

function Lista() {
  return (
    <>
    <h4>3 tecnologias que desejo aprender na área de programação</h4>
    <ul>
      <li>C++</li>
      <li>Phyton</li>
      <li>JavaScript</li>
      <li>Desenvolvimento de engines</li>
    </ul>
    </>
  );
}

function ListaOrdenada() {
  return (
    <>
    <h4>3 objetivos ou metas na área de tecnologia.</h4>
    <ol>
      <li>Faculdade na área</li>
      <li>Alcançar um emprego que me agrade e seja bem remunerado</li>
      <li>Não enlouquecer</li>
    </ol>
    </>
  );
}

function App() {
  return (
    <>
        <Titulo/>
        <Lista/>
        <ListaOrdenada/>
    </>
  );
}


export default App;