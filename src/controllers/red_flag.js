import red_flagModel from '../models/red_flag';

const red_flag = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} red_flag object 
   */
  create(req, res) {
    if (!req.body.success && !req.body.lowPoint && !req.body.takeAway) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const red_flag = red_flagModel.create(req.body);
    return res.status(201).send(red_flag);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} red_flags array
   */
  getAll(req, res) {
    const red_flags = red_flagModel.findAll();
    return res.status(200).send(red_flags);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} red_flag object
   */
  getOne(req, res) {
    const red_flag = red_flagModel.findOne(req.params.id);
    if (!red_flag) {
      return res.status(404).send({'message': 'red_flag not found'});
    }
    return res.status(200).send(red_flag);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} updated red_flag
   */
  update(req, res) {
    const red_flag = red_flagModel.findOne(req.params.id);
    if (!red_flag) {
      return res.status(404).send({'message': 'red_flag not found'});
    }
    const updatedred_flag = red_flagModel.update(req.params.id, req.body)
    return res.status(200).send(updatedred_flag);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {void} return statuc code 204 
   */
  delete(req, res) {
    const red_flag = red_flagModel.findOne(req.params.id);
    if (!red_flag) {
      return res.status(404).send({'message': 'red_flag not found'});
    }
    const ref = red_flagModel.delete(req.params.id);
    return res.status(204).send(ref);
  }
}

export default red_flag;