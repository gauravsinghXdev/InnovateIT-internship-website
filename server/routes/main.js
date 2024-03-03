const express = require('express');
const router = express.Router();

const mainLayout = '../views/layouts/main';

// GET HOME 
router.get('', async (req, res) => {
    try {
      res.render('index', { 
        currentRoute: '/',
        layout: mainLayout
      });
  
    } catch (error) {
      console.log(error);
    }
  
  });

// GET ABOUT US 
router.get('/about', async (req, res) => {
    try {
      res.render('about', { 
        currentRoute: '/privacy-about',
        layout: mainLayout
      });
  
    } catch (error) {
      console.log(error);
    }
  
  });

// GET PRIVACY POLICY 
router.get('/privacy-policy', async (req, res) => {
    try {
      res.render('privacypolicy', { 
        currentRoute: '/privacy-policy',
        layout: mainLayout
      });
  
    } catch (error) {
      console.log(error);
    }
  
  });

// GET TERM AND CONDITION 
router.get('/term-and-condition', async (req, res) => {
    try {
      res.render('termcondition', { 
        currentRoute: '/term-and-condition',
        layout: mainLayout
      });
  
    } catch (error) {
      console.log(error);
    }
  
  });



  module.exports = router; 
