function SummaryCard({ summary }) {

  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg mt-6">

      <h2 className="text-2xl font-bold text-white mb-4">
        Summary
      </h2>

      <p className="text-slate-300 whitespace-pre-line">
        {summary}
      </p>

    </div>
  );
}

export default SummaryCard;