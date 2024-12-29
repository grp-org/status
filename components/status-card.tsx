import { statusNames } from "@/lib/incident";
import { Status } from "@/lib/systems";
import React from "react";

// Define prop types for the StatusCard component
interface StatusCardProps {
  title: string;
  status: Status;
  children: any;
}

// StatusCard component
export const StatusCard: React.FC<StatusCardProps> = ({
  title,
  status,
  children,
}) => {
  // Define color styles
  const statusColors: Record<StatusCardProps["status"], string> = {
    up: "bg-green-500 text-green-500",
    partial: "bg-yellow-500 text-yellow-500",
    down: "bg-red-500 text-red-500",
    "under-maintenance": "bg-slate-500 text-slate-500",
  };

  // Get the correct color classes based on the passed color prop
  const colorClass = statusColors[status];

  return (
    <div className="bg-background rounded-lg border">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <span className="relative flex">
            <span
              className={`rounded-full inline-flex w-3 h-3 ${
                colorClass.split(" ")[0]
              }`}
            />
            <span
              className={`rounded-full w-3 h-3 inline-flex absolute animate-ping ${
                colorClass.split(" ")[0]
              }`}
            />
          </span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className={`text-sm ${colorClass.split(" ")[1]}`}>
          {statusNames[status]}
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-muted-foreground">{children}</p>
      </div>
    </div>
  );
};
