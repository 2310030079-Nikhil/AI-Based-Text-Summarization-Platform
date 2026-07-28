function Dashboard({ analytics }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

        <h2 className="text-xl text-white font-bold">
          Original Words
        </h2>

        <p className="text-4xl text-blue-400 mt-4">
          {analytics.original_words}
        </p>

      </div>

      <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

        <h2 className="text-xl text-white font-bold">
          Summary Words
        </h2>

        <p className="text-4xl text-green-400 mt-4">
          {analytics.summary_words}
        </p>

      </div>

    </div>
  );
}

export default Dashboard;