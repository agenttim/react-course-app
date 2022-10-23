import React, {useState} from 'react';
import CostItem from "./CostItem";
import "./Costs.css"
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {

    const [selectedYear, setSelectedYear] = useState("2020");

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter(cost =>
    {
        return cost.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className="costs">
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                <CostsDiagram costs={filteredCosts} />
                <CostList costs={filteredCosts}/>
            </Card>
        </div>
    );
}

export default Costs;