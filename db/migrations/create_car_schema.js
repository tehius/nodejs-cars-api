const createCarSchema = `
    CREATE SCHEMA cars (
        CREATE TABLE brand (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
        );
        
        CREATE TABLE model (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            year INT,
            fuel_type VARCHAR(255) NOT NULL,
            brand_id INT REFERENCES brand(id) ON DELETE CASCADE,
        );
    );
`;

module.exports = createCarSchema;