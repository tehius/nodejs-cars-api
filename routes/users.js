const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

// "database"
    let users = [
    {
        first_name: 'João',
        last_name: 'Grécia',
        email: 'joaogrecia@example.com'
    },
    {
        first_name: 'Manuel',
        last_name: 'Roma',
        email: 'manuelroma@example.com'
    },
];

// getting the list of users from the "database"
router.get('/', (req, res) => {
    res.send(users);
})

// adding a user to the "database"
router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuiidv4() });

    res.send(`${user.first_name} has been added to the Database`);
})

// finding users within the "database" by their id value
router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    const foundUser = users.find((user) => user.id === id);
    
    res.send(foundUser);
});

// deleting the user from the "database"
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    users = users.filter((user) => user.id !== id)
  
    res.send(`${id} deleted successfully from database`);
});

// patching the data of the users, such as first/last name or the email
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    
    const { first_name, last_name, email } = req.body;
    
    const user = users.find((user) => user.id === id);
    
    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(email) user.email = email;

    res.send(`User with the ${id} has been updated`);
});


module.exports = router;