import { useState } from "react";
import { capitalize, min, random, sampleSize } from "lodash-es";
import { dict } from "./data/words";

export const App = () => {
  const [countWords, setWords] = useState<string>("");
  const [result, setResult] = useState("");

  const genWords = () => {
    const listWord = sampleSize(dict, +countWords ?? 0);
    let res = "";
    let start = 0;
    let end = 0;

    while (end !== +countWords) {
      console.log("here");

      const cntWordsInSentence =
        +countWords - end <= 10 ? +countWords - end : random(5, 10);

      end += cntWordsInSentence;

      res += capitalize(listWord.slice(start, end).join(" ")) + ". ";

      start = end;
    }
    setResult(res);
  };

  return (
    <main>
      <div className="flex gap-4">
        <input
          type="number"
          placeholder="How many words?"
          className="input input-bordered input-primary w-full max-w-xs"
          value={countWords}
          onChange={(e) => setWords(e.currentTarget.value)}
        />
        <button className="btn btn-primary" onClick={genWords}>
          Generate
        </button>
      </div>
      <div className="mt-12">{result}</div>
    </main>
  );
};
