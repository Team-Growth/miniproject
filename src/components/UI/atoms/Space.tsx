import React, { CSSProperties } from "react";

interface ISpace extends React.HTMLAttributes<HTMLDivElement> {}

const style: CSSProperties = {
  flex: 1,
};

const Space = ({ ...props }: ISpace) => {
  return <div {...props} style={{ ...style, ...props.style }}></div>;
};

export default Space;
