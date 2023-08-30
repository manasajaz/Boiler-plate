type Option = {
  value: string;
  displayName: string;
};

type SelectProps = {
  option: Option[];
  label: string;
  getvalue: (selectedValue: string) => void;
};

export default function Select(props: SelectProps) {
  const { option, label, getvalue } = props;

  let SelectChange = (e: string) => {
    console.log(e);
    getvalue(e);
  };

  return (
    <>
      <p>{label}</p>
      <select onChange={(e) => SelectChange(e.target.value)}>
        {option &&
          Array.isArray(option) &&
          option.map((x, i) => (
            <option key={i} value={x.value}>
              {x.displayName}
            </option>
          ))}
      </select>
    </>
  );
}
