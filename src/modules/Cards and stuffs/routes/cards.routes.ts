import {Router} from 'express'
import ProductsController from '../controllers/ProductsController'

const routes = Router();

const productsController = new ProductsController();

routes.post('/',productsController.create);
routes.get('/',productsController.index);
routes.get('/:id',productsController.show);
routes.put('/:id',productsController.update);
routes.delete(':id',productsController.delete);

export default routes;