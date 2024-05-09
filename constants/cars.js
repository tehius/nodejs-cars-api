const brands = [ 'Renault', 'Fiat', 'Honda', 
                'Peugeot', 'Chevrolet', 'Hyundai', 
                'Volkswagen', 'Nissan', 'Toyota' ];

const brandModels = {
    renault: [ 'Clio', 'Kwid', 'Sandero', 'Logan', 'Oroch', 'Duster' ],
    fiat: [ 'Argo', 'Uno', 'Mobi', 'Cronos', 'Palio', 'Toro', ],
    honda: [ 'Civic', 'Fit', 'City', 'HRV', 'Accord', 'CRV' ],
    peugeot: [ '2008', '208', '3008', '5008', 'Expert', 'Boxer' ],
    chevrolet: [ 'Onix', 'S10', 'Vectra', 'Cobalt', 'Tracker', 'Cruze' ],
    volkswagen: [ 'Gol', 'Polo', 'Saveiro', 'Virtus', 'Nivus', 'Amarok' ],
    hyundai: [ 'HB20', 'Creta', 'Tucson', 'Sonata', 'Santa Fé', 'IX35' ],
    nissan: [ 'March', 'Kicks', 'Leaf', 'Sentra', 'Versa', 'Frontier' ],
    toyota: [ 'Corolla', 'Yaris', 'SW4', 'Hilux', 'Etios', 'Prius' ],
}

const fuel_types = [ 'Gasoline', 'Alcohol', 'Diesel' ]

const colors = [ 'Black', 'White', 'Grey', 'Red' ]

module.exports = { brands, brandModels, fuel_types, colors };