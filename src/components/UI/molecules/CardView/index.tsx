import React, { CSSProperties, useState } from "react";
import IDummy from "../../../../api/models/Dummy";
import moment from "moment";
import { Card, IconButton } from "@material-ui/core";
import styles from "./index.module.scss";
interface ICardView extends React.HTMLAttributes<HTMLDivElement> {
  data: IDummy;
}

const style: CSSProperties = {
  display: "inline-block",
  marginBottom: 10,
};

const CardView = ({ data, ...props }: ICardView) => {
  const [dto, setDTO] = useState(data);
  const [isLike, setIsLike] = useState(false);

  const appendFavNum = (num: number) =>
    setDTO({
      ...dto,
      favoriates: dto.favoriates + num,
    });

  const onClickLike = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isLike) {
      (e.target as Element).classList.add(styles.animate);
      appendFavNum(1);
      setIsLike(true);
    } else {
      (e.target as Element).classList.remove(styles.animate);
      appendFavNum(-1);
      setIsLike(false);
    }
  };

  return (
    <Card {...props} style={{ ...style, ...props.style }}>
      <img src={dto.pictures[0]} alt="" />
      <div className={styles.infoBox}>
        <div>
          <div>
            <div className={`${styles.Heart}`} onClick={onClickLike}></div>
            <span>{dto.favoriates}</span>
          </div>
          <div>{dto.author}</div>
        </div>
        <div>{moment(dto.createdAt).format("YYYY.MM.DD")}</div>
      </div>
    </Card>
  );
};

export default CardView;
