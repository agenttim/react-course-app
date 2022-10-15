import CostItem from "./components/Costs/CostItem";
import Costs from "./components/Costs/Costs";


function App() {

    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: "Холодильник",
            amount: 999.99
        },
        {
            date: new Date(2021, 11, 15),
            description: "Ноутбук",
            amount: 1999.21
        },
        {
            date: new Date(2021, 3, 1),
            description: "Джинсы",
            amount: 59.00
        },
    ];

  return (
      <Costs
          costs={costs}
      />

  );
}

export default App;
