import Expenses from "./components/Expenses";

function App() {
  //const para = document.createElement("h1");
  //para.textContent = "Exercise done!";
  //document.getElementById("root").appendChild(para);
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div>
      <p>Practicing React...</p>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
