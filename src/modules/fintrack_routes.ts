import { Router } from 'express';

import { createFintrack, getFintracks, updateFintrack, deleteFintrack } from './fintrack_controllers';

const router = Router();

router.post('/', createFintrack);

router.get('/', getFintracks);

router.patch('/:id', updateFintrack);

router.delete('/:id', deleteFintrack);

export default router;