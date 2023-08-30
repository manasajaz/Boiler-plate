import Button from "@mui/material/Button";

type btnprops = {
  btnValue: string;
  btnfun: () => void;
};

export default function Addbtn(props: btnprops) {
  const { btnValue } = props;

  return (
    <Button variant="contained" onClick={props.btnfun}>
      {btnValue}
    </Button>
  );
}
