// a component function that is mentioned in the App that sorts the pigs by name
function SortByName({hogs, setFiltered}) {                      //props from app
    const sortName = () => {                                    //make a variable to store func event inside
        const sortedHogsByName = hogs.sort((a,b) => {           // sort the hogs, same logic as the weight. iterates the whole array
            return a.name.localeCompare(b.name);                //localeCompare means makes sure its in the local language of your current value
        });                                                     //ascending order bec a.name is less than b.name = -1 
        setFiltered([...sortedHogsByName]);                     //descending order:  b.name.localeCompare(a.name)
    };
    return (
        <button onClick={sortName}>Sort By Name</button>
    );
}

export default SortByName;