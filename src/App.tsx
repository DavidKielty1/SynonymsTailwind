import Synonyms from "./synonyms";
import Search from "./search";
import { useState } from "react";

const App: React.FC = () => {
  const [searchedWord, setSearchedWord] = useState<string>("");

  const updateWord = (word: string): void => {
    setSearchedWord(word);
  };

  console.log("Index.tsx " + searchedWord);

  return (
    <div className="mx-auto max-w-5xl @container">
      <div className="border-solid border-2 border-lime-500 mx-auto p-1 @4xl:grid @4xl:grid-cols-[1fr_1fr]">
        <main className="border-solid border-2 border-red-500 mx-auto p-1 ">
          <Search word={searchedWord} updateWord={updateWord} />
        </main>
        <Synonyms word={searchedWord} />
      </div>
    </div>
  );
};

export default App;
