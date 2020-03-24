import { Router } from 'express';

import CourseController from './app/controllers/CourseController';
import InstitutionController from './app/controllers/InstitutionController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', async (req, res) => {
  res.json({ message: 'Working' });
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
// Users
// routes.get('/users', UserController.index);
// routes.put('/users/:id', UserController.show);
routes.post('/users', UserController.store);

// Session
routes.post('/session', SessionController.store);

// Private Routes
routes.use(authMiddleware);

// Users Private
routes.put('/users', UserController.update);

export default routes;
