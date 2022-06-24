const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    let answer = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return answer
}

function fuzzyMatch(drivers, string){
    let firstletter = drivers.filter(driver => driver.slice(0, string.length) === string)
    return firstletter
}

function matchName(drivers, string){
    let name = drivers.filter(driver => driver.name === string)
    return name
}
