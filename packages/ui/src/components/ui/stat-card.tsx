import { CardStat } from "@repo/ui/types";

export const StatCard = ({ value, label, subLabel }: CardStat) => {
  return (
    <div
      data-testid="stat-card"
      className="flex flex-col items-center space-y-2 rounded-lg bg-zinc-900 p-6 text-center text-white"
    >
      <div className="text-3xl font-bold md:text-4xl lg:text-5xl">{value}</div>
      <div className="space-y-1">
        {label && (
          <div className="text-base text-gray-200 md:text-lg font-bold">
            {label}
          </div>
        )}
        {subLabel && <div className="text-sm text-gray-400">{subLabel}</div>}
      </div>
    </div>
  );
};
