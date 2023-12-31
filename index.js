// Code your solution here
function findMatching(drivers, query) {
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  
    return matchingDrivers;
  }
  function fuzzyMatch(drivers, query) {

    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  
    return matchingDrivers;
  }
  function matchName(drivers, query) {
    
    const matchingDrivers = drivers.filter(driver =>
      driver.name.toLowerCase() === query.toLowerCase()
    );
  
    return matchingDrivers;
  }