const { brandModels, brands } = require('./constants/cars');

function loadYear() {
    let carYear = document.getElementById('year');
    var min = 1995;
    var max = new Date().getFullYear();
    for (var year = min; year <= max; year++) {
        var opt = document.createElement('option');
        opt.value = year;
        opt.innerHTML = year;
        carYear.appendChild(opt);
    }
}

function loadBrand() {
    let carBrand = document.getElementById('brand');
    brands.forEach(function(brandName) {
        let opt = document.createElement('option');
        opt.value = brandName;
        opt.innerHTML = brandName;
        carBrand.appendChild(opt)
    });
}

function loadName() {
    let carName = document.getElementById('name');
    let carBrand = document.getElementById('brand').value;

    console.log(carBrand);
}

function loadFuelType() {
    let carFuel = document.getElementById('fuel_type');
    fuel_types = [ 'Gasoline', 'Diesel', 'Ethanol' ]

    fuel_types.forEach(function(fuelTypes) {
        var opt = document.createElement('option')
        opt.value = fuelTypes;
        opt.innerHTML = fuelTypes;
        carFuel.appendChild(opt);
    });
}

function loadData() {
    loadYear();
    loadBrand();
    loadFuelType();
}

setTimeout(loadData, 1000)