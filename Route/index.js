const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Controller = require('../Controller/userDetails.js');

var control = new Controller();
app.use(bodyParser.json());

/*
    @desc : "This link will get the user's name and will call getUserByUserName()"
    @author :  Shrishti 
*/
app.get('/rest/api/users/get/:un', async (req, res) => {
    let result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and will call addAwards()"
    @author :  Shrishti
*/
app.put('/rest/api/users/addAward/:un', async (req, res) => {
    let result = await control.addAwards(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call updateAward()"
    @author :  Shrishti
*/
app.put('/rest/api/users/changeAward/:un/:id', async (req, res) => {
    let result = await control.updateAwards(req.params.un, req.params.id, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call removeAwards()"
    @author :  Parag Badala
*/
app.put('/rest/api/users/removeAward/:un/:id', async (req, res) => {
    let result = await control.removeAwards(req.params.un, req.params.id);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and will call addCertifications()"
    @author :  Dipmalya Sen
*/
app.put('/rest/api/users/addCertificate/:un', async (req, res) => {
    let result = await control.addCertifications(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call updateCertifications()"
    @author :  Dipmalya Sen
*/

app.put('/rest/api/users/changeCertificate/:un/:id', async (req, res) => {
    let result = await control.updateCertifications(req.params.un, req.params.id, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call removeCertifications()"
    @author :  Himani Jain
*/

app.put('/rest/api/users/removeCertificate/:un/:id', async (req, res) => {
    let result = await control.removeCertifications(req.params.un, req.params.id);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and will call addpublications()"
    @author :  Himani Jain
*/

app.put('/rest/api/users/addPublication/:un', async (req, res) => {
    let result = await control.addPublications(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call updatePublications()"
    @author :  Lalithya Satya
*/

app.put('/rest/api/users/changePublication/:un/:id', async (req, res) => {
    let result = await control.updatePublications(req.params.un, req.params.id, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call removePublications()"
    @author :  Lalithya Satya
*/

app.put('/rest/api/users/removePublication/:un/:id', async (req, res) => {
    let result = await control.removePublications(req.params.un, req.params.id, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and will call addEndorsement()"
    @author :  Soumyodipta Majumdar
*/

app.put('/rest/api/users/addEndorsement/:un', async (req, res) => {
    let result = await control.addEndorsement(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and skill and will call addSkill()"
    @author :  Soumyodipta Majumdar
*/

app.put('/rest/api/users/addSkill/:un/:skill', async (req, res) => {
    let result = await control.addSkill(req.params.un, req.params.skill);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and skill and will call deleteSkill()"
    @author :  Somya Burman
*/

app.put('/rest/api/users/deleteSkill/:un/:skill', async (req, res) => {
    let result = await control.deleteSkill(req.params.un, req.params.skill);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and will call updateBio()"
    @author :  Somya Burman
*/

app.put('/rest/api/users/updateBio/:un', async (req, res) => {
    let result = await control.updateBio(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call addExperience()"
    @author :  Anubha Joshi
*/

app.put('/rest/api/users/addExperience/:un', async (req, res) => {
    let result = await control.addExperience(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call updateExperience()"
    @author :  Anubha Joshi
*/

app.put('/rest/api/users/updateExperience/:un/:id', async (req, res) => {
    let result = await control.updateExperience(req.params.un, req.params.id, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call removeExperience()"
    @author :  Veshnavee 
*/

app.put('/rest/api/users/removeExperience/:un/:id', async (req, res) => {
    let result = await control.removeExperience(req.params.un, req.params.id);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and will call addEducation()"
    @author :  Veshnavee 
*/

app.put('/rest/api/users/addEducation/:un', async (req, res) => {
    let result = await control.addEducation(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call updateEducation()"
    @author :  Supriya Patil
*/

app.put('/rest/api/users/updateEducation/:un/:id', async (req, res) => {
    let result = await control.updateEducation(req.params.un, req.params.id, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and user Id and will call removeEducation()"
    @author :  Supriya Patil
*/

app.put('/rest/api/users/removeEducation/:un/:id', async (req, res) => {
    let result = await control.removeEducation(req.params.un, req.params.id);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and will call countConnection()"
    @author :  Parag Badala
*/

app.get('/rest/api/users/countConnection/:un', async (req, res) => {
    let result = await control.countConnection(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and will call updateName()"
    @author :  Somya Burman
*/

app.put('/rest/api/users/updateName/:un', async (req, res) => {
    let result = await control.updateName(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result)
});

/*
    @desc : "This link will get the user's name and will call updateDOB()"
    @author :  Parag Badala
*/


app.put('/rest/api/users/updateDob/:un', async (req, res) => {
    let result = await control.updateDOB(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result);
});

/*
    @desc : "This link will get the user's name and will call upateEmail()"
    @author :  Parag Badala
*/

app.put('/rest/api/users/updateEmail/:un', async (req,res) => {
    let result = await control.updateEmail(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result)
});

/*
    @desc : "This link will get the user's name and will call updateMobile()"
    @author :  Parag Badala
*/

app.put('/rest/api/users/updateMobile/:un', async (req,res) => {
    let result = await control.updateMobile(req.params.un, req.body);
    result = await control.getUserByUserName(req.params.un);
    res.send(result)
});

app.listen('4002', () => console.log('Listening on port 4002'))
