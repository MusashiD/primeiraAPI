import {Router} from 'express'

const routes = Router();

routes.post('/',() => console.log('postando'));
routes.get('/',() => console.log('listando'));
routes.get('/:id',() => console.log('listando um unico'));
routes.put('/:id',() => console.log('atualiza um unico'));
routes.delete(':id',() => console.log('deletar um'));

export default routes;