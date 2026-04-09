import "./App.css";

function Parent() {
  const name = "shiva";
  const age = 19;
  return <App name={name} age={age} />;
}

function Child() {
  return <App />;
}

function App(props) {
  return (
    <>
      <h1>Hello world</h1>
      <h1>Name = {props.name}</h1>
      <h1>Age = {props.age}</h1>
    </>
  );
}

export default Parent;
