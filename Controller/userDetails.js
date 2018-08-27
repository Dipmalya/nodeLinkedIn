const Dao = require('../DAO/dao.js');
const crypto = require("crypto");

const dao = new Dao();

class Controller {

    /*
        @desc "This function returns user details of the user"
        @reason "When we click on any user's profile, this details will be brought to be displayed"
    */
    async getUserByUserName(uName) {
        let objQuery = { userName: uName };
        let result = await dao.find("demo", objQuery);
        return result;
    }

    /*
        @desc "This function will add the award passed as obj to the user's profile"
        @reason "When we click on add award(+) then, the entered details will be fetched and passed as obj"
    */
    async addAwards(uName, obj) {
        const id = crypto.randomBytes(16).toString("hex");
        let query = { userName: uName };
        let newValue = { $push: { "profile.accomplishment.awards": { $each: [{ "awardId": id, "name": obj.name, "awardedBy": obj.awardedBy, "year": obj.year }] } } };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    /*
        @desc "This function will update the award(according to user requirement) passed as obj to the user's profile"
        @reason "When we click on update award() then, the entered details will be fetched and passed as obj"
    */
    async updateAwards(uName, id, obj) {
        let query = { "userName": uName, "profile.accomplishment.awards.awardId": id };
        let newValue = {
            $set: {
                "profile.accomplishment.awards.$.name": obj.name,
                "profile.accomplishment.awards.$.awardedBy": obj.awardedBy,
                "profile.accomplishment.awards.$.year": obj.year
            }
        };
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

     /*
        @desc "This function will remove the award passed as obj to the user's profile"
        @reason "When we click on delete award(-) then, the entered details will be deleted from the "
    */
    async removeAwards(uName, id){
        let query = { userName: uName };
        let newValue = { $pull: { "profile.accomplishment.awards": {"awardId": id } } };
        let upsert = false;
        let bool = true;
        let result = await dao.update("demo",query,newValue,upsert,bool);
        return result;
    }


    async addCertifications(uName, obj) {
        const id = crypto.randomBytes(16).toString("hex");
        let query = { userName: uName };
        let newValue = { $push: { "profile.accomplishment.certifications": { $each: [{ "certificateId": id, "name": obj.name, "issuedBy": obj.issuedBy, "year": obj.year }] } } };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async updateCertifications(uName, id, obj) {
        let query = { "userName": uName, "profile.accomplishment.certifications.certificateId": id };
        let newValue = {
            $set: {
                "profile.accomplishment.certifications.$.name": obj.name,
                "profile.accomplishment.certifications.$.issuedBy": obj.issuedBy,
                "profile.accomplishment.certifications.$.year": obj.year
            }
        };
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async removeCertifications(uName, id){
        let query = { userName: uName };
        let newValue = { $pull: { "profile.accomplishment.certifications": {"certificateId": id } } };
        let upsert = false;
        let bool = true;
        let result = await dao.update("demo",query,newValue,upsert,bool);
        return result;
    }

    async addPublications(uName, obj) {
        const id = crypto.randomBytes(16).toString("hex");
        let query = { userName: uName };
        let newValue = { $push: { "profile.accomplishment.publications": { $each: [{ "publicationId": id, "name": obj.name, "topic": obj.topic, "publishedBy": obj.publishedBy, "year": obj.year }] } } };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async updatePublications(uName, id, obj) {
        let query = { "userName": uName, "profile.accomplishment.publications.publicationId": id };
        let newValue = {
            $set: {
                "profile.accomplishment.publications.$.name": obj.name,
                "profile.accomplishment.publications.$.topic": obj.topic,
                "profile.accomplishment.publications.$.publishedBy": obj.publishedBy,
                "profile.accomplishment.publications.$.year": obj.year
            }
        };
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async removePublications(uName, id){
        let query = { userName: uName };
        let newValue = { $pull: { "profile.accomplishment.publications": {"publicationId": id } } };
        let upsert = false;
        let bool = true;
        let result = await dao.update("demo",query,newValue,upsert,bool);
        return result;
    }

    async addEndorsement(uName, obj) {
        const id = crypto.randomBytes(16).toString("hex");
        let query = { userName: uName };
        let newValue = {
            $push: {
                "profile.endorsements":
                {
                    $each: [
                        { "endorsementId": id, "endorsedBy": obj.endorsedBy, "comment": obj.comment }]
                }
            }
        };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async addSkill(uName, skill) {
        let query = { userName: uName };
        let newValue = { $push: { "profile.skills": skill } };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async deleteSkill(uName, skill) {
        let query = { userName: uName };
        let newValue = { $pull: { "profile.skills": { $in: [skill] } } };
        let result = await dao.update("demo", query, newValue);
        return result;
    }

    async updateBio(uName, obj) {
        let query = { userName: uName };
        let newValue = { $set: { "profile.bio": obj.bio } };
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async addExperience(uName, obj) {
        const id = crypto.randomBytes(16).toString("hex");
        let query = { userName: uName };
        let newValue = {
            $push: {
                "profile.experience":
                {
                    $each: [
                        { "experienceId": id, "designation": obj.designation, "companyName": obj.companyName, "timePeriod": obj.timePeriod }]
                }
            }
        }
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async updateExperience(uName, id, obj){
        let query = { "userName": uName, "profile.experience.experienceId": id };
        let newValue = {
            $set: {
                "profile.experience.$.designation": obj.designation,
                "profile.experience.$.companyName": obj.companyName,
                "profile.experience.$.timePeriod": obj.timePeriod
            }
        };
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async removeExperience(uName, id) {
        let query = { userName: uName };
        let newValue = { $pull: { "profile.experience": {"experienceId":id} } };
        let upsert = false;
        let bool = true;
        let result = await dao.update("demo", query, newValue, upsert, bool);
        return result;
    }

    async addEducation(uName, obj) {
        const id = crypto.randomBytes(16).toString("hex");
        let query = { userName: uName };
        let newValue = {
            $push: {
                "profile.education":
                {
                    $each: [
                        { "educationId": id, "degreeName": obj.degreeName, "university": obj.university, "percentage": obj.percentage, "yearOfPassing": obj.yearOfPassing }]
                }
            }
        }
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async updateEducation(uName, id, obj){
        let query = { "userName": uName, "profile.education.educationId": id };
        let newValue = {
            $set: {
                "profile.education.$.degreeName": obj.degreeName,
                "profile.education.$.university": obj.university,
                "profile.education.$.percentage": obj.percentage,
                "profile.education.$.yearOfPassing": obj.yearOfPassing
            }
        };
        let upsert = { "upsert": true };
        let result = await dao.update("demo", query, newValue, upsert);
        return result;
    }

    async removeEducation(uName, id) {
        let query = { userName: uName };
        let newValue = { $pull: { "profile.education": {"educationId":id} } };
        let upsert = false;
        let bool = true;
        let result = await dao.update("demo", query, newValue, upsert, bool);
        return result;
    }

    async countConnection(uName){
        let query = [{$match:{"userName":uName}},{$project: { count: { $size:"$connections" },"_id":0}}]
        let result = await dao.aggregate("demo",query);
        return result;
    }


}

module.exports = Controller;
