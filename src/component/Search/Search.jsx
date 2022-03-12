import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
    </div>
  );
}
