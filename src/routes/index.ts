import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';
import * as routerPost from '../controllers/routersPost';
import validator from 'validator';


const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

//testes -------------------------------------
router.get('/price', PageController.price);
router.get('/idade', PageController.idade);
//--------------------------------------------

router.post('/routesPost', routerPost.anoPost);

router.get('/search', SearchController.search);

//exemplo de um dos validator da library da NPM 
console.log(validator.isIP('124.0.0.1'));

export default router;