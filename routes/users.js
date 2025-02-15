const router=require('express').Router();
const userController=require('../controllers/user');



router.get('/getUsers',userController.getUsers);
router.get('/getUser/:id',userController.getUser);

module.exports=router;