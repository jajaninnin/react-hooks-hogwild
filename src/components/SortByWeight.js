// this component function is mentioned in the App or parent file, thats where its getting used.
function SortByWeight({hogs, setFiltered}) {                // props from App
    const sortWeight = () => {                              // make a func, 
        const sortedHogsByWeight = hogs.sort((a,b) => {     // a, b is two items in the array, its an iteration method, goes on all items on the array
            if (a.weight < b.weight) {                      // if the first item in the array that is being called is LESS to the next item on array
                return -1;                                  // -1 bec a < b, 
            }
            else if (a.weight > b.weight) {                 // if a is > b, return 1 bec? 
                return 1;
            } else
            return 0;
        });                                                 //end of sortedHogsByWeight variable
        setFiltered([...sortedHogsByWeight]);               //make a new array of the newly sorted hogs, use state/props from APp
    };
    return (
        <button onClick={sortWeight}>Sort By Weight</button>    //when button is clicked, {sortWeight} fr line 3 is gonna work, will sort the names 
    );
}

export default SortByWeight

// sorting function is looking for a number value 
// if a < b, return -1 so it knows that a is less than b? so 0 - 1 = -1
// if a > b, return 1 so it knows that a is greater than b? so 1 - 0 = 1
// if a === b, return 0 bec 1 - 1 = 0, or 0 - 0 = 0 and so forth