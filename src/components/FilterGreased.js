import hogs from "../porkers_data";

function FilterGreased({greaseFilter, setGreased}) {   //props from App
    function handleChange(event){                       //event handler func
        const isGreased = event.target.value;           // get value(all or greased) from the <option> bec you change it
        if (isGreased === "All") {                      // if value === All then
            setGreased(hogs);                           // show all the hogs
        } else {            
            const selectedGreased = greaseFilter.filter((hogs) => {     // use a variable so you can call it later that filter all the hogs
                return hogs.greased.toString() === isGreased;           // turn boolean value to make it to a string so it shows
            })                                          //if value === the selection "greased" then show all the greased pigs
            setGreased(selectedGreased)                 // setting the new array as the newly filtered hogs
        }
        
    }

    return (
        <div className="PigListFilter">
            <select name="filter" onChange={handleChange}>      {/* monitor the changes on the select or drop down */}
                <option value="All">Filter by Grease</option>
                <option value="true">Greased</option>
            </select>
        </div>
    )
}

export default FilterGreased