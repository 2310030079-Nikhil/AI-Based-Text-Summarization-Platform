import { useState } from "react";

function App() {

  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {

    if (!text) {
      alert("Please enter text");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        `http://127.0.0.1:8000/summarize/text?text=${encodeURIComponent(text)}&length=medium`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      setSummary(data.summary);

    } catch (error) {

      console.log(error);

      alert("Error generating summary");

    }

    setLoading(false);
  };

  return (

    <div className="min-h-screen bg-slate-900 p-10">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-white">
            AI Text Summarizer 🚀
          </h1>

          <p className="text-slate-400 mt-4 text-lg">
            FastAPI + React + OpenAI Powered
          </p>

        </div>

        {/* Input Card */}

        <div className="bg-slate-800 rounded-3xl shadow-2xl p-8">

          <textarea
            rows="10"
            placeholder="Enter your text here..."
            className="w-full p-5 rounded-2xl bg-slate-700 text-white outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="flex justify-center mt-6">

            <button
              onClick={generateSummary}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-white font-bold text-lg"
            >
              Generate Summary
            </button>

          </div>

        </div>

        {/* Loading */}

        {

          loading && (

            <div className="text-center mt-10 text-white text-2xl">

              Generating Summary...

            </div>

          )

        }

        {/* Summary Card */}

        {

          summary && !loading && (

            <div className="bg-slate-800 rounded-3xl shadow-2xl p-8 mt-10">

              <h2 className="text-3xl font-bold text-white mb-5">
                Summary
              </h2>

              <p className="text-slate-300 whitespace-pre-line text-lg leading-relaxed">
                {summary}
              </p>

            </div>

          )

        }

      </div>

    </div>

  );
}

export default App;