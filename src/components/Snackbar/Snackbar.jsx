import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Snackbars({ snackState, handleCloseSnack }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={snackState.openSnack}
        autoHideDuration={2000}
        onClose={handleCloseSnack}
      >
        <div className="mb-6">
          <Alert onClose={handleCloseSnack} severity={snackState.type}>
            {snackState.text}
          </Alert>
        </div>
      </Snackbar>
    </div>
  );
}
