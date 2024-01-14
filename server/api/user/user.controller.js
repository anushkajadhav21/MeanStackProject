const UserModel = require('./user.model');



exports.getUsers = (req, res, next) => {
    UserModel.find({
        // $or: [
        //     {firstname:"Anushka1"},
        //     {lastname: "Jadhav"},
        // ]
    }).then((users) => {
        res.status(200).json({
            users: users
        });
    }).catch((err => {
        console.log(err);
        res.status(500).json(err)
    }))

};

exports.createUser = (req, res, next) => {
    const newUser = new UserModel({ name: req.body.name,firstname: req.body.firstname,lastname: req.body.lastname});
    newUser
    .save()
    .then((result) => { 
        res.status(201).json({
            user: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

// exports.findById = (req,res) =>{
//     vivek = req.body.anu
//     UserModel.findById(vivek).then( 
//         (data) => {
//             res.status(200).json(data);
//         }
//     ).catch(
//         err => {
//         res.status(500).json(err)
//     })
// }
exports.findById = (req, res, next) => {
    UserModel.findById(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
}

exports.findById = (req, res, next) => {
    UserModel.findByIdAndDelete(req.params.id).then((result) => {
        if(result)
        {
            res.status(200).json(result);
        }else{
            res.status(200).json({msg: "User not found"});
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
}

exports.getUserById = (req,res,next) => {
    UserModel.findById(req.params.id).then((result)=>{
        if(result)
        {
            res.status(200).json(result);
        }else{
            res.status(200).json({msg: "User not found"});
        }
    }).catch(err => {
        res.status(404).json({
            error:err
        });
    });
}

exports.updateByid = (req,res,next) =>{
    UserModel.findByIdAndUpdate(req.params.id).then((result)=>{
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error:err
        });
    });
}

