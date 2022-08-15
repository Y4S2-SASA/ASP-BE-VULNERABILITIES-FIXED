import {User, validate} from "../models/index.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import {
	deleteUser,
	getUser,
	getUsers,
	updateUser
} from "../repository/user.repository.js";

const validateUserData = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

export const login = async (req, res) => {
	try {
		const { error } = validateUserData(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		//check if entered password is valid
		const isValidPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isValidPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: {token, user}, message: "Logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

export const register = async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

        //To get salt string we will be using genSalt and storing it in the salt variable
		const salt = await bcrypt.genSalt(Number(process.env.SALT));

        //bcrypt password to hashing algorithm
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

export const getUserService = async (_id) => {
    try {
      const user = await getUser(_id);
      return Promise.resolve(user);
    } catch (err) {
      throw new AppError(err.message, err.status);
    }
};
  
export const getUsersService = async () => {
    try {
      const user = await getUsers();
      return Promise.resolve(user);
    } catch (err) {
      throw new AppError(err.message, err.status);
    }
};
  
export const updateUserService = async (_id, data) => {
    try {
      const user = await updateUser(_id, data);
      return Promise.resolve(user);
    } catch (err) {
      throw new AppError(err.message, err.status);
    }
};
  
export const deleteUserService = async (_id) => {
    try {
      const user = await deleteUser(_id);
      return Promise.resolve(user);
    } catch (err) {
      throw new AppError(err.message, err.status);
    }
};