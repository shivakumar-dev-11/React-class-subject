import "./App.css";

function Parent() {
  const name = "shiva";
  const age = 19;
  return <GrandChild name={name} age={age} />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild(props) {
  return (
    <>
      <h1>Hello world</h1>
      <h1>Name = {props.name}</h1>
      <h1>Age = {props.age}</h1>
    </>
  );
}

export default Parent;
