/** @format */
"use client";

type Props = {
  label: string;
  value: string;
};

export default function LabelValue(props: Props) {
  return (
    <div className="text-lg font-normal">
      <span>{props.label}: </span>
      <span className="text-white/80">{props.value}</span>
    </div>
  );
}
