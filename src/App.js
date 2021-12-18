import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./styles.css";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birtdays today</h3>
        <ul>
          {people.map((birtday) => {
            return (
              <List
                img={birtday.image}
                key={birtday.id}
                name={birtday.name}
                age={birtday.age}
              />
            );
          })}
        </ul>
        <button onClick={() => setPeople([])}>clean all births</button>
      </section>
    </main>
  );
}

export default App;
