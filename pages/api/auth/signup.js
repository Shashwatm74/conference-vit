import User from '../../../models/User';
import dbConnect from '../../../middleware/dbConnect';
import handler from '../../../middleware/handler';


handler
    .post(createUser)

async function createUser(req, res) {

    const data = req.body;

    const { email, password } = data;

    dbConnect();

    const user = await User.create(req.body)

    res.status(201).json({ message: 'Created user!' });

}

export default handler;
