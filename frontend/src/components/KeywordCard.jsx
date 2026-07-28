function KeywordCard({ keywords }) {

  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mt-6">

      <h2 className="text-2xl font-bold text-white mb-4">
        Keywords
      </h2>

      <div className="flex flex-wrap gap-3">

        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            {keyword}
          </span>
        ))}

      </div>

    </div>
  );
}

export default KeywordCard;