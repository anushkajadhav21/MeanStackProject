const employeeModel = require('./Employee.model');



exports.getEmployee = (req, res, next) => {
    employeeModel.find({
        // $or: [
        //     {firstname:"Anushka1"},
        //     {lastname: "Jadhav"},
        // ]
    }).then((employee) => {
        res.status(200).json({
            employee: employee
        });
    }).catch((err => {
        console.log(err);
        res.status(500).json(err)
    }))

};

exports.createEmployee = (req, res, next) => {
    const newemployee = new employeeModel({ name: req.body.name,firstname: req.body.firstname,lastname: req.body.lastname});
    newemployee
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
    employeeModel.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
}

exports.deleteEmployee = (req, res, next) => {
    employeeModel.findByIdAndDelete(req.params.id).then((result) => {
        if(result)
        {
            res.status(200).json(result);
        }else{
            res.status(200).json({msg: "Employee not found"});
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
}

exports.getEmployeeById = (req,res,next) => {
    employeeModel.findById(req.params.id).then((result)=>{
        if(result)
        {
            res.status(200).json(result);
        }else{
            res.status(200).json({msg: "Employee not found"});
        }
    }).catch(err => {
        res.status(404).json({
            error:err
        });
    });
}

exports.updateByid = (req,res,next) =>{
    employeeModel.findByIdAndUpdate(req.params.id,
        {
            "firstname":req.body.firstname,
            "lastname": req.body.lastname
        }).then((result)=>{
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error:err
        });
    });
}

