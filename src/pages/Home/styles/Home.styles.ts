import { createStyles, makeStyles } from "@material-ui/core/styles";

import palette from "theme/palette";

export const HomeStyles = makeStyles(() =>
  createStyles({
    container: {
      background: palette.secondary,
      height: "100vh",
      color: palette.white,
    },
  }),
);
