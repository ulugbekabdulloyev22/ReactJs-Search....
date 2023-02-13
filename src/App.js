import { useState } from "react";
import "./App.css";
import { Users } from "./users.js";
import Table from "./table";

function App() {
  const [queri, setQueri] = useState("");

  const search = (data) => {
    return data.filter(
      (users) =>
        users.first_name.toLowerCase().includes(queri) ||
        users.last_name.toLowerCase().includes(queri) ||
        users.email.toLowerCase().includes(queri)
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        value={queri}
        onChange={(e) => setQueri(e.target.value)}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
