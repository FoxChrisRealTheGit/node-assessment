const data = require('./userData.json');
const _ = require('underscore');
module.exports = {

    AllUsers: (req, res) => {
        let querystring_favorite = req.query.favorites;
        let querystring_age = req.query.age;
        let querystring_lastname = req.query.lastname;
        let querystring_email = req.query.email;
        let Query = []
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].favorites.indexOf(querystring_favorite) !== -1) {
                Query.push(data[i])
            }
        }
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].age < querystring_age) {
                Query.push(data[i])
            }
        }
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].last_name === querystring_lastname) {
                Query.push(data[i])
            }
        }
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].email === querystring_email) {
                Query.push(data[i])
            }
        }
        if (Query.length > 0) {
            res.status(200).send(Query)
        }
        else {
            res.status(200).send(data)
        }
    },
    second: (req, res) => {
        let user_Id = req.params.id
        let Query =''
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].id == user_Id) {
                Query = data[i]
            }
        }
        if (Query !== '') {
            res.status(200).send(Query)
        }else{
            res.status(404).send('null')
        }
    },
    admins: (req, res)=>{
        let admins =[]
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].type == 'admin') {
                admins.push(data[i])
            }
        }
        res.status(200).send(admins)
    },
    nonadmins:(req, res)=>{
        let nonadmins =[]
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].type !== 'admin') {
                nonadmins.push(data[i])
            }
        }
        res.status(200).send(nonadmins)
    },
    usertype: (req, res)=>{
        let type = req.params.type
        let users =[]
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].type == type) {
                users.push(data[i])
            }
        }
        res.status(200).send(users)
    },
    updateUser: (req, res)=>{
        let id = req.params.id
        
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].id == id) {
                data[i] = req.body
            }
        }
        res.status(200).send(data)
    },
    AddUser:(req, res)=>{
        let number = data.length +1
        let newUser = req.body
        newUser.id = number
        data.push(newUser)
        res.status(200).send(data)
    },
    removeUser: (req, res)=>{
        let newdata =[]
        let id = req.params.id
        for (let i = 0; i < data.length; i += 1) {
            if (data[i].id == id) {
                newdata = data.splice(data[i], 1)
            }
        }
        res.status(200).send(newdata)
    }
}