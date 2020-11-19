const graph = {
    ["you"]: [ "alice", "bob", "claire"],
    ["bob"]: ["anuj", "peggy"],
    ["alice"]: ["peggy"],
    ["claire"]: ["thom", "jonny"],
    ["anuj"]: [],
    ["peggy"]: [],
    ["thom"]: [],
    ["jonny"]: []
};

const personIsSeller = (name) => name.includes('m')

const breadthSearch = (name) => {
    let searchQueue = [...graph[name]];
    let searched = [];

    while (searchQueue.length > 0) {
        let person = searchQueue.shift();
        if (!searched.find(name => name === person)) {
            if (personIsSeller(person)) {
                console.log(`${person} is a mango seller`)
                break
            } else {
                searchQueue = [...searchQueue, ...graph[person]]
                searched = [...searched, person]
            }
        }
    }
}

console.log(breadthSearch('you'))