import { Router } from 'express';
import DummyController from './app/controllers/DummyController'

const routes = new Router();

routes.get('/', DummyController.index)

export default routes;
