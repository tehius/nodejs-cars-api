import { v4 as uuiidv4 } from 'uuid';
import express from 'express';
const router = express.Router();

// mock database
const users = [
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

// getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuiidv4() });

    res.send(`${user.first_name} has been added to the Database`)
})

export default router