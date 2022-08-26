import React from "react";

interface Props {
  title: String;
}

export default function Title({ title }: Props) {
  return <div>{title}</div>;
}
