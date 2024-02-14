import { useEffect, useState } from "react";
import list from "./components/list";
import "./App.css";
import "./App.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  // <list />;

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
