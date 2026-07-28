import { useState } from "react";
import { summarizeText } from "../services/api";

function TextInput({
  setSummary,
  setKeywords,
  setAnalytics,
  setLoading,
}) {

  const [text, setText] = useState("");
  const [length, setLength] = useState("medium");

  const handleSummarize = async () => {

    if (!text) {
      alert("Please enter text");
      return;
    }

    setLoading(true);

    try {

      const res = await summarizeText(text, length);

      setSummary(res.data.summary);
      setKeywords(res.data.keywords);
      setAnalytics(res.data.analytics);

    } catch (error) {
      console.log(error);
      alert("Error generating summary");
    }

    setLoading(false);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

      <textarea
        className="w-full h-52 p-4 rounded-xl bg-slate-700 text-white outline-none"
        placeholder="Paste your text here..."
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex justify-between items-center mt-4">

        <select
          className="p-3 rounded-lg bg-slate-700 text-white"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>

        <button
          onClick={handleSummarize}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-bold"
        >
          Summarize Text
        </button>

      </div>

    </div>
  );
}

export default TextInput;