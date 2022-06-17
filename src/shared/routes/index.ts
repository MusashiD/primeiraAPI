import {Router} from 'express'
import ConsoleRoutes from '../../modules/Consoles/routes/consoles.routes';
import VideoGameRoutes from '../../modules/Games/routes/games.routes';
import CardsAndProducts from '../../modules/Cards and stuffs/routes/cards.routes';


const routes = Router();

routes.use('/consoles', ConsoleRoutes);
routes.use('/videogames',VideoGameRoutes);
routes.use('/cardsAndProducts',CardsAndProducts);

export default routes;