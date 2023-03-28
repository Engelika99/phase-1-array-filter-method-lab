// Code your solution here
/*function findMatching(drivers, name){
       
       const names = drivers.filter(value => value === name);
       //let character = drivers.filter(char => char === name);
       return names
}**/
function findMatching(drivers, attribute) {
       return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
     }
     
     function fuzzyMatch(drivers, attribute) {
       return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
     }
     
     function matchName(drivers, argument) {
       return drivers.filter(function (driver) { return driver.name === argument })
     }
