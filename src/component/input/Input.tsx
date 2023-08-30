type InputProps = {
  type: string;
  onChange: (value: string) => void;
};

export default function AddInput(props: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    props.onChange(newValue);
  };

  return (
    <div>
      <input type={props.type} onChange={handleChange} />
    </div>
  );
}
