const LeaveBalance = () => {
  return (
    <section className="px-5 py-6 mt-8 rounded-xl border border-solid border-zinc-100">
      <h2 className="mb-8 text-base font-bold text-black">Leave Balance</h2>
      <div className="relative flex flex-col gap-2 py-4 pr-4 pl-0 rounded-md shadow-[0_0.724px_2.173px_rgba(16,24,40,0.10)]">
        <h3 className="text-xs text-black">Annual Balance</h3>
        <p className="text-xl font-bold text-gray-900">70 days</p>
        <button className="absolute right-5 px-4 py-2.5 text-sm bg-white rounded-lg border border-gray-300 border-solid cursor-pointer text-slate-700 max-sm:static max-sm:mt-4 max-sm:w-full">
          Request leave
        </button>
      </div>
      <div className="flex gap-2.5 mt-8 max-sm:flex-col">
        <div className="flex-1 p-4 rounded-md border-gray-200 border-solid bg-zinc-50 border-[0.724px]">
          <h3 className="mb-4 text-xs text-black">Available to use</h3>
          <p className="text-xl font-bold">70 days</p>
        </div>
        <div className="flex-1 p-4 rounded-md border-gray-200 border-solid bg-zinc-50 border-[0.724px]">
          <h3 className="mb-4 text-xs text-black">Used</h3>
          <p className="text-xl font-bold">0 days</p>
        </div>
      </div>
    </section>
  );
};

export default LeaveBalance;
