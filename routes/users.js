const router=require('express').Router();
const userController=require('../controllers/user');
const verify=require('../middlewares/authorization');

router.get('/',userController.getHome)
router.get('/getUsers',verify,userController.getUsers);
router.get('/getUser/:id',userController.getUser);
router.post('/addUser',userController.addUser);

module.exports=router;