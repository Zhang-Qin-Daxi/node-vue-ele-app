// 引入express
const express = require("express");
// 实例化router
const router = express();

const User = require("../../models/user");

// 引入加密文件
const bcrypt = require("bcrypt");
// 引入地址

// $router GET api/users/test
// @desc 返回请求的json数据
// @access  public
router.get("/test", (req, res) => {
	console.log(req);
	res.json({ msg: "login works" })
})

// $router post api/users/register
// @desc 返回请求的json数据
// @access  public
router.post("/register", (req, res) => {
	console.log(req.body);
	res.json({ msg: "ok" });

	//  查询数据库中是否拥有邮箱
	// User.findOne({email:req.body.email})
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (user) {
				return res.status(400).json({ email: "邮箱已经被注册！" })
			} else {
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					// avatar,
					password: req.body.password
				})
				//  加密
				bcrypt.genSalt(10, function (err, salt) {
					bcrypt.hash(newUser.password, salt, function (err, hash) {
						if (err) throw err;
						newUser.password = hash;
						newUser.save()
							.then(user => res.json(user))
							.then(err => console.log(err));
					});
				});
			}
		})
})


module.exports = router;