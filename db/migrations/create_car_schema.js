const createCarSchema = `
    CREATE SCHEMA cars 

    CREATE TABLE cars.brand (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE cars.model (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        year INT,
        fuel_type VARCHAR(255) NOT NULL,
        brand_id INT REFERENCES cars.brand(id) ON DELETE CASCADE
    );
`;

module.exports = createCarSchema;