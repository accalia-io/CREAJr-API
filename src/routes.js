import { Router } from 'express';

import CourseController from './app/controllers/CourseController';
import InstitutionController from './app/controllers/InstitutionController';

const routes = new Router();

routes.get('/', async (req, res) => {
  res.json({ message: 'Welcome to Omni CLI' });
});

// Courses
routes.get('/courses', CourseController.index);
routes.get('/courses/:id', CourseController.show);
routes.post('/courses', CourseController.store);
routes.put('/courses/:id', CourseController.update);
// Institutions
routes.get('/institutions', InstitutionController.index);
routes.get('/institutions/:id', InstitutionController.show);
routes.post('/institutions', InstitutionController.store);
routes.put('/institutions/:id', InstitutionController.update);

export default routes;
