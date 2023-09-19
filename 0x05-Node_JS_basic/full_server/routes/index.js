import { AppController } from '../controllers/AppController';
import { StudentsController } from '../controllers/StudentsController';

const express = require('express');

// Create a router instance
router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);

// Export the router instance
export default router;