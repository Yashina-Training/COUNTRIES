// ==============================================================================
function addCountry(countryName, capitalName) {
  countrysH[countryName] = capitalName;
}

function deleteCountry(countryName) {
  delete countrysH[countryName];
}

function getCountryInfo(countryName) {
  if (countryName in countrysH)
    return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
  else
    return 'нет информации о стране ' + countryName + '!';
}

function listCountrys() {
  var res = "";
  for (var CN in countrysH)
    res += '\n' + getCountryInfo(CN);
  return res;
}

// ==============================================================================

function addUserCountry() {
  let newCountry = prompt('Введите название страны');
  let newCapital = prompt('Введите название столицы');
  addCountry(newCountry, newCapital);
}
function infoAboutCountry() {
  let aboutCountry = prompt('Введите название страны');
  console.log(getCountryInfo(aboutCountry));
}
function allCountries() {
  console.log("список стран:" + listCountrys());
}
function removeUserCountry() {
  let countrie = prompt('Введите название страны');
  deleteCountry(countrie);
}