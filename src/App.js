function App() {
  const para = document.createElement("p");
  para.textContent = "Hello World!";
  document.getElementById("root").appendChild(para);
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
