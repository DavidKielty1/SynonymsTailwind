import React, { useEffect, useState } from "react";

// import styles from "./components/search/Search.module.css";

interface searchedDataProp {
  word: string;
  updateWord: (type: any) => void;
}

const Search: React.FC<searchedDataProp> = ({ word, updateWord }) => {
  const [searchedData, setSearchedData] = useState("");

  useEffect(() => {
    setSearchedData(word);
  }, [word]);

  const enterHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    setSearchedData((event.target as HTMLInputElement).value);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    console.log("Search.tsx " + searchedData);
    event.preventDefault();
  };
  return (
    <div>
      <h1>React Synonyms Project</h1>
      <form
        className="border-solid border-2 border-pink-500 m-1 "
        onSubmit={onSubmitHandler}
      >
        <label htmlFor="search">Search word: </label>
        <input
          name="search"
          type="text-area"
          placeholder="word"
          onKeyUp={enterHandler}
        />
        <button onClick={() => updateWord(searchedData)}></button>
      </form>
    </div>
  );
};

export default Search;
