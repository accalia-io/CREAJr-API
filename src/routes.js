import { Router } from 'express';

import CourseController from './app/controllers/CourseController';

const routes = new Router();

routes.get('/', async (req, res) => {
  res.json({ message: 'Welcome to Omni CLI' });
});

routes.get('/courses', CourseController.index);
routes.get('/courses/:id', CourseController.show);
routes.post('/courses', CourseController.store);
routes.put('/courses/:id', CourseController.update);

export default routes;
