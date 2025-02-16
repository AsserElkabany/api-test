const router=require('express').Router();
const userController=require('../controllers/user');
const verify=require('../middlewares/authorization');
const {limit , blockBannedIPs} = require('../middlewares/rate_limit');

router.use(blockBannedIPs);

router.get('/',userController.getHome)
router.get('/getUsers',verify,userController.getUsers);
router.get('/getUser/:id',limit,userController.getUser);
router.post('/addUser',userController.addUser);

module.exports=router;