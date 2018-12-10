// Code your solution in this file!
function logDriverNames(drivers) {
  const callback = function(el, i, arr) {
    console.log(el);
  }
  return drivers.forEach(function(driver){ console.log(driver.name);});
}
