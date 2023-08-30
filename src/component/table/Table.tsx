type tableprops = {
  label: string;
  datasource: any[];
  cols: any[];
};

export default function Table(props: tableprops) {
  const { label, datasource, cols } = props;

  return (
    <>
      <div>
        <table border={1}>
          <thead>
            <tr>
              {cols.map((x, i) => (
                <th>{x.hading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datasource.map((row, i) => (
              <tr>
                {cols.map((col, i) => (
                  <td>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
