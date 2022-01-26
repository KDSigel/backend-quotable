const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    // TODO: Implement me!
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const response = await res.json();
    const { quote } = response[0];
    const profile = Profile.insert({ name, quote });
    return profile;
  }
};
