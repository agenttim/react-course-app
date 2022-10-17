import CostItem from "./components/Costs/CostItem";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


function App() {

    const costs = [
        {
            id: "c1",
            date: new Date(2021, 2, 12),
            description: "Холодильник",
            amount: 999.99
        },
        {
            id: "c2",
            date: new Date(2021, 11, 15),
            description: "Ноутбук",
            amount: 1999.21
        },
        {
            id: "c3",
            date: new Date(2021, 3, 1),
            description: "Джинсы",
            amount: 59.00
        },
    ];

    const addCostHandler = (cost) => {
        console.log(cost);
        console.log("App component");
    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs} />
        </div>
    );
}

export default App;
