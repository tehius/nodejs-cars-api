const { brandModels, brands } = require('./constants/cars');

function loadBrand() {
    let carBrand = document.getElementById('brand');
    brands.forEach(function(brandName) {
        let opt = document.createElement('option');
        opt.value = brandName;
        opt.innerHTML = brandName;
        carBrand.appendChild(opt);
    });
}

window.loadModels = function(brand = "") {
    let _brand = brand.toLowerCase();
    let carModel = document.getElementById('model');
    carModel.innerHTML = '<option value="" disabled selected>Select your option:</option>';
    if (brandModels.hasOwnProperty(_brand)) {
        let models = brandModels[_brand];
        models.forEach(function(modelName) {
            let opt = document.createElement('option');
            opt.value = modelName;
            opt.innerHTML = modelName;
            carModel.appendChild(opt);
        });
    }
}

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

function loadFuelType() {
    let carFuel = document.getElementById('fuel_type');
    const fuel_types = ['Gasoline', 'Diesel', 'Ethanol'];
    fuel_types.forEach(function(fuelType) {
        var opt = document.createElement('option');
        opt.value = fuelType;
        opt.innerHTML = fuelType;
        carFuel.appendChild(opt);
    });
}

function loadData() {
    loadBrand();
    loadModels();
    loadYear();
    loadFuelType();
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(loadData, 1000);
});