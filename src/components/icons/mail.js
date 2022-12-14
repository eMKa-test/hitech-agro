/* eslint-disable max-len */
import {makeStyles, SvgIcon} from "@material-ui/core";

const svgStyles = makeStyles({
  root: {
    width: 18,
    height: 18,
  },
});

function MailIcon() {
  const classes = svgStyles();

  return (
    <SvgIcon
      className={classes.root}
      viewBox="0 0 18 18">
      <path
        d="M17.9867 3.87781C17.9867 3.85725 18.0009 3.83723 17.9999 3.81689L12.507 9.10968L17.9934 14.2334C17.9966 14.1968 17.9867 14.1599 17.9867 14.1225V3.87781Z"
        fill="#025FA3" />
      <path
        d="M11.6685 9.92407L9.42606 12.0815C9.31258 12.1907 9.16603 12.2455 9.0194 12.2455C8.87582 12.2455 8.73224 12.1931 8.61955 12.088L6.38325 10.0042L0.861023 15.327C0.995298 15.3752 1.13943 15.4127 1.29036 15.4127H16.7485C16.9727 15.4127 17.1829 15.3444 17.3656 15.2426L11.6685 9.92407Z"
        fill="#025FA3" />
      <path
        d="M9.01297 10.8513L17.396 2.77595C17.2062 2.6631 16.9853 2.5874 16.7485 2.5874H1.29034C0.981981 2.5874 0.699434 2.70713 0.47937 2.88974L9.01297 10.8513Z"
        fill="#025FA3" />
      <path
        d="M0 4.07446V14.1223C0 14.2377 0.0265108 14.3489 0.0552896 14.4551L5.50902 9.20333L0 4.07446Z"
        fill="#025FA3" />
    </SvgIcon>
  );
}

export default MailIcon;
