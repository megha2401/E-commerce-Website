import React from "react";

import "./App.css";

type Props = {
  className?: string;
  value: string;
  onChange: () => {};
};
const InputBox: React.FC<Props> = ({ className = "", value, onChange }) => {
  return <input className={className} value={value} onChange={onChange} />;
};

export default InputBox;
