import { StatusDot } from "@global/Icons";

const AttendanceSummary = () => {
  return (
    <section className="px-5 py-6 mt-8 rounded-xl border border-solid border-zinc-100">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-base font-bold text-black">Attendance Summary</h2>
        <div className="px-2 py-1 text-xs text-black rounded-2xl bg-zinc-100">
          October
        </div>
      </header>

      <div className="relative mx-0 my-6 h-7 w-[323px] max-sm:w-full">
        <div className="rounded bg-zinc-100 size-full" />
        <div className="absolute top-0 left-0 h-full bg-amber-500 rounded w-[175px]" />
      </div>

      <div className="flex flex-col gap-2.5 max-sm:w-full">
        {[...Array(4)].map((_, index) => (
          <div key={index}>
            <div className="flex items-center py-4 pr-6 pl-px">
              <div className="flex py-0.5 pr-2 pl-1.5 bg-emerald-50 rounded-2xl">
                <StatusDot />
              </div>
              <div className="flex-1 ml-2 text-sm text-zinc-500">
                {index === 0 ? "22 Jan 2022" : "Days with incomplete records"}
              </div>
              <div className="px-2 py-0.5 text-xs bg-gray-100 rounded-2xl text-slate-700">
                0
              </div>
            </div>
            {index < 3 && (
              <div className="h-px bg-gray-200 w-[301px] max-sm:w-full" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AttendanceSummary;
