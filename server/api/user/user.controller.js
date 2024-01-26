const userModel = require("./user.model");

exports.createUser = (req, res, next) => {
  const newUser = new userModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json({
        user: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.login = async (req, res, next) => {
  try {
    const result = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    }).then((result) => {
        console.log(result);
        if (result) {
            res.status(200).json({
                msg: 'Login Success...'
            });
            
        }else 
        {
                res.status(400).json({ message: 'login fail' });
        }
    })
    
    } catch (error) {
        res.status(500).json
        ({
            error: error
        });
    }
};
