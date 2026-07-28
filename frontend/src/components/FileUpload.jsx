import { useState } from "react";
import { summarizePDF } from "../services/api";

function FileUpload({
  setSummary,
  setKeywords,
  setAnalytics,
  setLoading,
}) {

  const [length, setLength] = useState("medium");

  const handleFile = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setLoading(true);

    try {

      const res = await summarizePDF(file, length);

      setSummary(res.data.summary);
      setKeywords(res.data.keywords);
      setAnalytics(res.data.analytics);

    } catch (error) {
      console.log(error);
      alert("Error uploading PDF");
    }

    setLoading(false);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mt-6">

      <div className="flex justify-between items-center">

        <input
          type="file"
          accept=".pdf"
          onChange={handleFile}
          className="text-white"
        />

        <select
          className="p-3 rounded-lg bg-slate-700 text-white"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>

      </div>

    </div>
  );
}

export default FileUpload;