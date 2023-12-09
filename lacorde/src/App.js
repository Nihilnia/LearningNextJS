import Card from "./components/Card";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <>
      <div className="containerCard">
        <Card title="Card 0" text="Ich lieben nich" />
        <Card title="Was ich liebe" text="Ich lieben nich" />
        <Card title="Was ich liebe" text="Ich lieben nich" />
        <Card title="Was ich liebe" text="Ich lieben nich" />
      </div>
    </>
  );
}

export default App;
