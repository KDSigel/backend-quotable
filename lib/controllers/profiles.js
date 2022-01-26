const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  // take in the req.name and pass it to the profileService.create
  const profile = await ProfileService.create(req.body);
  // send the information from profileService
  res.send(profile);
});
