import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

function RNMList() {
  const [rnm, setRNM] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setRNM(data.results));
  }, []);

  return (
    <section className="grid" aria-live="polite">
      {rnm.map((r) => (
        <TaskCard
          key={r.id}
          title={r.name}
          image={r.image}
          priority={r.status}
        />
      ))}
    </section>
  );
}

export default RNMList;