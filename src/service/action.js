export const fetchDataApi = () => async (dispatch) => {
    try {
        dispatch({ type: "dataRequest" });
        let response = await fetch(
            "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        response=await response.json()
        
        const res={"tickets":response.tickets,"users":response.users}
        console.log("response",res)
        
        if (res) {
            dispatch({ type: "dataSuccess", payload: res });
            console.log("success")
        } else {
            dispatch({ type: "dataFailure" });
            console.log("failure")
        }
    } catch (error) {
        dispatch({ type: "dataFailure" });
    }
};

export const selectData = (groupBy, tickets, orderBy) => async (dispatch) => {
    try {
        dispatch({ type: 'dataSelectRequest' })

        let user = false;
        let mySet = new Set();
        let myArr = [], dataSelected = [];

        if (groupBy === 'status') {
            tickets.forEach((elem) => {
                mySet.add(elem.status);
            })

            myArr = [...mySet];

            myArr.forEach((elem, index) => {
                let myArr = tickets.filter((fElem) => {
                    return elem === fElem.status;
                })
                dataSelected.push({
                    [index]: {
                        title: elem,
                        value: myArr
                    }
                })
            })
        } else if (groupBy === 'user') {
            user = true;
            tickets?.users?.forEach((elem, index) => {
                myArr = tickets?.tickets?.filter((Felem) => {
                    return elem.id === Felem.userId;
                })

                console.log(myArr)

                dataSelected.push({
                    [index]: {
                        title: elem.name,
                        value: myArr
                    }
                })
            })
        } else {
            let prior_list = ["Urgent", "High", "Medium", "Low", "No priority"];
            prior_list.forEach((elem, index) => {
                myArr = tickets.filter((item) => {
                    return index === 4-item.priority;
                })

                dataSelected.push({
                    [index]: {
                        title: elem,
                        value: myArr
                    }
                })
            })
        }

        if (orderBy === "priority") {
            dataSelected.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => a.priority - b.priority)
            })
        }

        if (orderBy === "title") {
            dataSelected.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title))
            })
        }

        dispatch({ type: 'dataSelectSuccess', payload: { dataSelected, user } });

    } catch (error) {
        dispatch({ type: 'dataSelectFailure', payload: error.message })
    }
}