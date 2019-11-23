import * as Yup from 'yup';

import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      height: Yup.number().required(),
      weight: Yup.number().required(),
      age: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    const emailExist = await Student.findOne({
      where: { email: req.body.email },
    });
    if (emailExist) {
      return res.status(400).json({ error: 'E-mail already exists.' });
    }
    const { id, name, email, height, weight, age } = await Student.create(
      req.body
    );
    return res.json({
      id,
      name,
      email,
      height,
      weight,
      age,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      height: Yup.number().required(),
      weight: Yup.number().required(),
      age: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(400).json({ error: 'Student does not exists.' });
    }
    const { email } = req.body;
    if (email) {
      const emailExist = await Student.findOne({ where: { email } });
      if (emailExist) {
        return res.status(400).json({ error: 'E-mail already' });
      }
    }
    const { id, name, height, weight, age } = await student.update(req.body);
    return res.json({
      id,
      email,
      name,
      height,
      weight,
      age,
    });
  }
}

export default new StudentController();
