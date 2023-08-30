import "./App.css";
import Addbtn from "./component/button/Button";
import Select from "./component/select/Select";
import Table from "./component/table/Table";
import MySwitch from "./component/switch/Switch";
import MyIcon from "./component/icon/Icon";
import MyDatePicker from "./component/date picker/Date Picker";
import AddInput from "./component/input/Input";

function App() {
  let data = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: true,
    },
  ];
  const btnfunction = () => {
    console.log("aaa");
  };
  return (
    <div className="App">
      <MySwitch />
      <MyIcon />
      <MyDatePicker />
      <Addbtn btnValue="Click" btnfun={btnfunction} />
      {/* <AddInput type="text" onChange={}/> */}
      <Table
        label="testing data"
        cols={[
          {
            hading: "id",
            key: "id",
          },
          {
            hading: "title",
            key: "title",
          },
          {
            hading: "status",
            key: "status",
          },
        ]}
        datasource={data}
      />
      <Select
        getvalue={(e) => {
          console.log("app.js", e);
        }}
        label="gender"
        option={[
          {
            value: "male",
            displayName: "male",
          },
          {
            value: "female",
            displayName: "female",
          },
        ]}
      />
    </div>
  );
}

export default App;
