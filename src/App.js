import CostItem from "./components/Costs/CostItem";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS = [
    {
        id: "c1",
        date: new Date(2022, 2, 12),
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

function App() {

    const [costs, setCosts] = useState(INITIAL_COSTS);



    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        });
    };

    return (
        <div>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs} />
        </div>
    );
}

export default App;
