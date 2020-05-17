import React, { CSSProperties } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface IFloatingButton extends React.HTMLAttributes<HTMLDivElement> {
  position: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };

  children: React.ReactElement<SvgIconProps>;
}

const useStyles = makeStyles({
  root: {
    boxShadow: "2px 2px 4px 0px rgba(156,156,156,1)",
    position: "fixed",
  },
});

const FloatingButton = ({ position: pos, ...props }: IFloatingButton) => {
  const styles = useStyles();
  return (
    <IconButton
      style={{
        left: pos.left || "initial",
        right: pos.right || "initial",
        top: pos.top || "initial",
        bottom: pos.bottom || "initial",
      }}
      className={styles.root}
    >
      {props.children}
    </IconButton>
  );
};

export default FloatingButton;
