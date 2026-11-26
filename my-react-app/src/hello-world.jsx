function HelloWorld() {
  return <h1>Hello World</h1>;
}

function HelloChennai() {
  return <h1>Hello Chennai</h1>;
}

function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloChennai />
    </div>
  );
}
