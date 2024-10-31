import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogTile from "./HogTile"
import FilterGreased from "./FilterGreased"
import SortByWeight from "./SortByWeight";
import SortByName from "./SortByName";

function App() {
	const [filteredHogs, setFiltered] = useState(hogs);							// global state so you can mention in the child components
	return (
		<div className="App">
			<Nav />
			<FilterGreased greaseFilter={filteredHogs} setGreased={setFiltered}/>	{/* call the separate components made, and pass/set props*/}
			<SortByWeight hogs={filteredHogs} setFiltered={setFiltered} />
			<SortByName hogs={filteredHogs} setFiltered={setFiltered} /> 
			{filteredHogs.map(hog => {
				return <HogTile 
				key={hog.image} hog={hog}/>
			})}
		</div>
	);
}

export default App;

// line 16 of hogs={filteredHogs} - lets you use the sort by weight component/function on the newly filerted hogs
// if you pass hogs={hogs} will filter all the hogs, not respecting your pre-filtered array on line 15
// same on line 17 for sort by name 