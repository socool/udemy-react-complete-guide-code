import ExpenseItem from "./components/ExpenseItem";

function App() {
  const para = document.createElement("h1");
  para.textContent = "Exercise done!";
  document.getElementById("root").appendChild(para);
  return (
    <div>
      <p>Practicing React...</p>
      <ExpenseItem />
    </div>
  );
}

export default App;
