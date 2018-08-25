const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Controller = require('../Controller/userDetails.js');

var control = new Controller();
app.use(bodyParser.json());

var name = "";

app.get('/rest/api/users/get/:un', async (req, res) => {
    let result = await control.getUserByUserName(req.params.un);
    name = result.name;
    res.send(result);
});

app.put('/rest/api/users/addAward/:un', async (req,res)=>{
    let result = await control.addAwards(req.params.un, req.body);
    res.send(result);
});

app.put('/rest/api/users/changeAwardName/:un/:data/:newVal', async (req,res)=>{
    let result = await control.updateAwardsName(req.params.un, req.params.data, req.params.newVal);
    res.send(result);
});

app.put('/rest/api/users/changeAwardGiver/:un/:data/:newVal', async (req,res)=>{
    let result = await control.updateAwardsAwardedBy(req.params.un, req.params.data, req.params.newVal);
    res.send(result);
});

app.put('/rest/api/users/changeAwardYear/:un/:data/:newVal', async (req,res)=>{
    let result = await control.updateAwardsYear(req.params.un, req.params.data, req.params.newVal);
    res.send(result);
});

app.put('/rest/api/users/addCertificate/:un', async (req,res)=>{
    let result = await control.addCertifications(req.params.un, req.body);
    res.send(result);
});

app.put('/rest/api/users/addPublication/:un', async (req,res)=>{
    let result = await control.addPublications(req.params.un, req.body);
    res.send(result);
});

app.put('/rest/api/users/addEndorsement/:un', async (req,res)=>{
    let result = await control.addEndorsement(req.params.un, req.body);
    res.send(result);
});

app.put('/rest/api/users/addSkill/:un/:skill', async (req,res)=>{
    let result = await control.addSkill(req.params.un, req.params.skill);
    res.send(result);
});

app.put('/rest/api/users/deleteSkill/:un/:skill', async (req,res)=>{
    let result = await control.deleteSkill(req.params.un, req.params.skill);
    res.send(result);
});

app.put('/rest/api/users/updateBio/:un', async (req,res)=>{
    let result = await control.updateBio(req.params.un, req.body);
    res.send(result);
});

app.listen('4002', () => console.log('Listening on port 4002'))