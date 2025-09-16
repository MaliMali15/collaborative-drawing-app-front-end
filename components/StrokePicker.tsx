import * as React from "react";
import {
  MinusIcon,
  DashIcon,
  DotsHorizontalIcon,
  DividerHorizontalIcon,
  ThickArrowRightIcon,
} from "@radix-ui/react-icons";

export type StrokeValue =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "thin"
  | "thick";

export interface StrokeOption {
  id: StrokeValue;
  label: string;
}

export interface StrokePickerProps {
  value: StrokeValue;
  onChange: (value: StrokeValue) => void;
  options?: StrokeOption[];
  className?: string;
}

const DEFAULT_OPTIONS: StrokeOption[] = [
  { id: "solid", label: "Solid" },
  { id: "dashed", label: "Dashed" },
  { id: "dotted", label: "Dotted" },
  { id: "double", label: "Double" },
  { id: "thin", label: "Thin" },
  { id: "thick", label: "Thick" },
];

function getPreviewClasses(id: StrokeValue): string {
  // Tailwind-based visual for the stroke preview bar
  switch (id) {
    case "solid":
      return "border-b border-foreground/80";
    case "dashed":
      return "border-b border-dashed border-foreground/80";
    case "dotted":
      return "border-b border-dotted border-foreground/80";
    case "double":
      // Use two lines to simulate double border
      return "relative after:content-[''] after:absolute after:left-0 after:right-0 after:top-[6px] after:border-b after:border-foreground/80 border-b border-foreground/80";
    case "thin":
      return "border-b border-foreground/80";
    case "thick":
      return "border-b-4 border-foreground/80";
    default:
      return "border-b border-foreground/80";
  }
}

function getIconFor(id: StrokeValue): React.ReactNode {
  switch (id) {
    case "solid":
      return <MinusIcon className="h-4 w-4" />;
    case "dashed":
      return <DashIcon className="h-4 w-4" />;
    case "dotted":
      return <DotsHorizontalIcon className="h-4 w-4" />;
    case "double":
      return <DividerHorizontalIcon className="h-4 w-4" />;
    case "thin":
      return <MinusIcon className="h-4 w-4" />;
    case "thick":
      return <ThickArrowRightIcon className="h-4 w-4 rotate-90" />;
    default:
      return <MinusIcon className="h-4 w-4" />;
  }
}

export function StrokePicker(props: StrokePickerProps) {
  const { value, onChange, options = DEFAULT_OPTIONS, className } = props;

  return (
    <div
      className={
        "grid grid-cols-1 gap-1 p-1 min-w-[200px]" +
        (className ? ` ${className}` : "")
      }
      role="listbox"
      aria-label="Line stroke"
    >
      {options.map((opt) => {
        const isSelected = opt.id === value;
        const preview = getPreviewClasses(opt.id);
        return (
          <button
            key={opt.id}
            type="button"
            className={
              "flex items-center gap-2 rounded-sm px-2 py-2 outline-none transition-colors" +
              " hover:bg-accent focus:bg-accent focus-visible:ring-2 focus-visible:ring-ring" +
              (isSelected ? " bg-accent" : "")
            }
            role="option"
            aria-selected={isSelected}
            onClick={() => onChange(opt.id)}
          >
            <span className="text-foreground/80">{getIconFor(opt.id)}</span>
            <span className="flex-1">
              <span className={"block h-0 " + preview} />
            </span>
            <span className="text-xs text-muted-foreground">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default StrokePicker;

