const mongoClient = require('mongodb').MongoClient
const URL = 'mongodb://localhost:27017/linkedindemo'

class Dao {
    
    /*
        @desc "mongo insert query"
        @author : Dipmalya Sen
        @param : {string} collection name, {object} query parameter
        @return : db update response
    */
    async insert(collection, obj) {
        if (obj == undefined || obj == {})
            throw "Object is Empty"
        let mongo = await mongoClient.connect(URL, { useNewUrlParser: true })
        let result
        try {
            let db = mongo.db('linkedindemo')
            result = (await db.collection(collection).insertOne(obj))
            return result
        }
        catch (err) {
            throw err
        }
        finally {
            mongo.close()
        }
    }

    /*
        @desc "mongo find query"
        @author : Dipmalya Sen
        @param : {string} collection name, {object} query parameter
        @return : db update response
    */
    async find(collection, query) {
        if (query == undefined)
            query = {}
        let mongo = await mongoClient.connect(URL, { useNewUrlParser: true })
        let result
        try {
            let db = mongo.db('linkedindemo')
            result = (await db.collection(collection).find(query).toArray())
            return result
        }
        catch (err) {
            throw err
        }
        finally {
            mongo.close()
        }
    }

    /*
        @desc "mongo update query"
        @author : Soumyodipta Majumdar
        @param : {string} collection name, {object} query parameter {object} query values {object} upsert parameter {object} boolean parameter
        @return : db update response
    */
    async update(collection, query, newValues, upsert, bool) {
        if(bool == undefined)
            bool = {};
        if(upsert == undefined)
            upsert = {};
        if (newValues == undefined || newValues == {})
            throw "Object is Empty"
        let mongo = await mongoClient.connect(URL, { useNewUrlParser: true })
        let result
        try {
            let db = mongo.db('linkedindemo')
            result = (await db.collection(collection).updateOne(query, newValues,upsert))
            return result
        }
        catch (err) {
            throw err
        }
        finally {
            mongo.close()
        }
    }

    /*
        @desc "mongo delete query"
        @author : Soumyodipta Majumdar
        @param : {string} collection name, {object} query parameter
        @return : db update response
    */    
    async delete(collection, query) {
        if (query == undefined)
            query = {}
        let mongo = await mongoClient.connect(URL, { useNewUrlParser: true })
        let result
        try {
            let db = mongo.db('linkedindemo')
            result = (await db.collection(collection).deleteOne(query))
            return result
        }
        catch (err) {
            throw err
        }
        finally {
            mongo.close()
        }
    }

    /*
        @desc "mongo aggregate query"
        @author : Dipmalya Sen
        @param : {string} collection name, {object} query parameter
        @return : db update response
    */
    async aggregate(collection, query) {
        if (query == undefined)
            query = []
        let mongo = await mongoClient.connect(URL, { useNewUrlParser: true })
        let result
        try {
            let db = mongo.db('linkedindemo')
            result = (await db.collection(collection).aggregate(query).toArray())
            return result
        }
        catch (err) {
            throw err
        }
        finally {
            mongo.close()
        }
    }

}

module.exports = Dao
