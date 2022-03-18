import express from 'express';
import { 
  getAllUsers, 
  getUser, 
  createUser, 
  updateUser, 
  deleteUser 
} from '../controllers/user.controller.js'

const router = express.Router();

router
  .get('/', getAllUsers)
  .get('/:id', getUser)
  .post('/', createUser)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser);
  
export default router;

