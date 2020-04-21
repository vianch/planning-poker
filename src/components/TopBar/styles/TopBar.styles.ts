import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const topBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);
