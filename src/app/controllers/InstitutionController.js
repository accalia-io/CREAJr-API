import Institution from '../models/Institution';
import Course from '../models/Course';
import InstitutionCourse from '../models/InstitutionCourse';

class InstitutionController {
  async index(req, res) {
    const institutions = await Institution.findAll({
      include: [
        {
          model: Course,
          as: 'courses',
          attributes: ['id', 'name'],
          through: {
            model: InstitutionCourse,
            attributes: [],
          },
        },
      ],
    });

    return res.json(institutions);
  }

  async show(req, res) {
    const institution = await Institution.findByPk(req.params.id, {
      include: [
        {
          model: Course,
          as: 'courses',
          attributes: ['id', 'name'],
          through: {
            model: InstitutionCourse,
            attributes: [],
          },
        },
      ],
    });

    return res.json(institution);
  }

  async store(req, res) {
    const institution = await Institution.create(req.body);

    if (!institution) {
      return res.status(400).json({ error: 'Failed to create institution' });
    }

    const { courses } = req.body;

    if (courses) {
      courses.forEach(async item => {
        const course = await Course.findByPk(item);

        if (!course) {
          return res.status(400).json({ error: 'Failed to find course' });
        }

        await InstitutionCourse.create({
          institution_id: institution.id,
          course_id: item,
        });
      });
    }

    return res.json(institution);
  }

  async update(req, res) {
    const institution = await Institution.findByPk(req.params.id);

    const newInstitution = await institution.update(req.body);

    const { courses } = req.body;

    if (courses) {
      courses.forEach(async item => {
        const course = await Course.findByPk(item);

        if (!course) {
          return res.status(400).json({ error: 'Failed to find course' });
        }

        const hasCreated = await InstitutionCourse.findOne({
          where: {
            institution_id: newInstitution.id,
            course_id: item,
          },
        });

        if (!hasCreated) {
          await InstitutionCourse.create({
            institution_id: newInstitution.id,
            course_id: item,
          });
        }
      });
    }

    return res.json(newInstitution);
  }
}

export default new InstitutionController();
