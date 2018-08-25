const Dao = require('../DAO/dao.js')

const dao = new Dao();

class Controller {

    async getUserByUserName(uName) {
        let objQuery = { userName: uName };
        let result = await dao.find("demo", objQuery);
        return result;
    }

    async addAwards(uName, obj) {
        let query = { userName: uName };
        let newValue = { $push: { "profile.accomplishment.awards": { $each: [{ "name": obj.name, "awardedBy": obj.awardedBy, "year": obj.year }] } } };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async updateAwardsName(uName, prev, newVal) {
        let query = { "userName": uName, "profile.accomplishment.awards.name": prev };
        let newValue = { $set: { "profile.accomplishment.awards.$.name": newVal } };
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async updateAwardsAwardedBy(uName, prev, newVal) {
        let query = { "userName": uName, "profile.accomplishment.awards.name": prev };
        let newValue = { $set: { "profile.accomplishment.awards.$.awardedBy": newVal } };
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async updateAwardsYear(uName, prev, newVal) {
        let query = { "userName": uName, "profile.accomplishment.awards.name": prev };
        let newValue = { $set: { "profile.accomplishment.awards.$.year": newVal } };
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async addCertifications(uName, obj) {
        let query = { userName: uName };
        let newValue = {
            $push: {
                "profile.accomplishment.certifications":
                {
                    $each: [
                        { "name": obj.name, "issuedBy": obj.issuedBy, "year": obj.year }]
                }
            }
        };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async addPublications(uName, obj) {
        let query = { userName: uName };
        let newValue = {
            $push: {
                "profile.accomplishment.publications":
                {
                    $each: [
                        { "name": obj.name, "topic": obj.topic, "publishedBy": obj.publishedBy ,"year": obj.year }]
                }
            }
        };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async addEndorsement(uName, obj) {
        let query = { userName: uName };
        let newValue = {
            $push: {
                "profile.endorsements":
                {
                    $each: [
                        { "endorsedBy": obj.endorsedBy, "comment": obj.comment }]
                }
            }
        };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async addSkill(uName, skill){
        let query = { userName: uName };
        let newValue = {$push: {"profile.skills":skill}};
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async deleteSkill(uName, skill){
        let query = { userName: uName };
        let newValue = { $pull: { "profile.skills": { $in: [ skill ] } } };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async updateBio(uName, obj){
        let query = { userName: uName };
        let newValue = {$set:{"profile.bio":obj.bio}};
        let upsert = {"upsert":true};
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

}

module.exports = Controller;
