import React, { CSSProperties } from "react";
import IDummy from "../../../api/models/Dummy";
import CardView from "../molecules/CardView";

interface ICardViewGroup extends React.HTMLAttributes<HTMLDivElement> {
  datas: IDummy[];
}

// 1190
// 960
// 730
// 500
// 270

const style: CSSProperties = {
  columnCount: 5,
  columnGap: 10,

  maxWidth: 5 * 230 + 10 * 4,
  margin: "0 auto",
  marginTop: 20,
};

const CardViewGroup = ({ datas, ...props }: ICardViewGroup) => {
  return (
    <div {...props} style={style}>
      {datas.map((d) => (
        <CardView data={d} key={d.id} />
      ))}
    </div>
  );
};

export default CardViewGroup;
