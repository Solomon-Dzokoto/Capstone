import { More } from "@global/Icons";

const ScheduleCard = () => {
  return (
    <article className="flex flex-col px-6 pt-3 pb-6 rounded-lg border border-gray-200 border-solid bg-zinc-50">
      <header className="flex justify-between items-center mb-3">
        <time className="text-xs text-zinc-500">Tomorrow</time>
        <button aria-label="More options">
          <More />
        </button>
      </header>
      <div className="flex flex-col gap-3">
        <time className="text-base font-bold text-black">
          08:00 AM - 04:00 PM
        </time>
        <div className="flex gap-2 items-center">
          <div className="bg-blue-50 rounded-3xl h-[21px] w-[21px]" />
          <span className="text-xs text-zinc-400">HEAD OFFICE</span>
        </div>
      </div>
    </article>
  );
};

export default ScheduleCard;
