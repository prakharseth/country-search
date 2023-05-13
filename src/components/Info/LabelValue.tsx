/** @format */
"use client";

type Props = {
  label: string;
  value: string;
};

export default function LabelValue(props: Props) {
  return (
    <div>
      <span>{props.label}: </span>
      <span>{props.value}</span>
    </div>
  );
}
