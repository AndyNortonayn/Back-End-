const {Router} = require ("express");
const PostController = require ("../controller/PostController.js");
const RegisterController = require ("../controller/RegisterController.js");
const {check} = require ("express-validator");

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delate)

router.post('/register', [
    check('login', 'Логин не может быть пустым').notEmpty(),
    check('password', 'Пароль не может быть меньше 4 символов и не больше 10').isLength({min:4, max:10})
],RegisterController.register )
router.post('/login', RegisterController.login)


module  .exports = router;