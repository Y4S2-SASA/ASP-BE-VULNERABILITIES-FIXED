import {User, validate} from "../models/index.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import { jsonResponse } from "../utils/serviceUtilities.js";
import { request_get_auth_code_url_signin, request_get_auth_code_url_signup } from '../utils/googleAuthCode.js';
import axios from "axios";
import query_string from 'querystring'

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
            //res.redirect(`http://localhost:3000/login?msg=${"User not found"}`)
			return res.status(401).send({ message: "Invalid Email or Password" });

		//check if entered password is valid
		const isValidPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isValidPassword)
            // res.redirect(`http://localhost:3000/login?msg=${"User not found"}`)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "Logged in successfully", userData: user });
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
		res.status(201).send({ message: "User created successfully", isSuccessfull: true });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error", isSuccessfull: false });
	}
};

export const findUser = (req, res) => {
    const filter = { id: req.query.id || 'inavlidId' };
    User.findOne(filter, (error, users) => {
        error ?
            res.status(500)
                .json(jsonResponse(false, error, error._message)) :
            res.status(201)
                .json(jsonResponse(true, users));
        })
}

export const findUsers = (req, res) => {
    const filter = {};
    const { id, role, _id } = req.query;
        id && (filter.id = id);
        role && (filter.role = role);
	_id && (filter._id = _id);
    User.find(filter, (error, users) => {
        error ?
            res.status(500)
                .json(jsonResponse(false, error, error._message)) :
            res.status(201)
                .json(jsonResponse(true, users));
        })
}

export const updateUser = (req, res) => {
    const id = req.params.id;
    const getUpdatedData = { new: true };

    User.findByIdAndUpdate(id, req.body, getUpdatedData, (error, updatedUser) => {
        if(!updatedUser){
            res.status(404).json(jsonResponse(false, updatedUser, "User not found!"));
        }else{
            error?
                res.status(400).json(jsonResponse(false, error, error._message)) 
                :
                res.status(200).json(jsonResponse(true, updatedUser));
        }          
    });       
}

export const deleteUser = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id, (error, deletedUser) => {
        if(!deletedUser){
            res.status(404).json(jsonResponse(false, deletedUser, "User not found!"));
        }else{
            error ? 
                res.status(400).json(jsonResponse(false, error, error._message)) 
                :
                res.status(200).json(jsonResponse(true, deletedUser));
        }
    });       
}

export const getGoogleAuthCodeSignin = (req, res) => {
    try {
        res.redirect(request_get_auth_code_url_signin);
      } catch (error) {
        res.sendStatus (500);
        console.log (error.message);
      }
}

export const getGoogleAuthCodeSignup = (req, res) => {
    try {
        res.redirect(request_get_auth_code_url_signup);
      } catch (error) {
        res.sendStatus (500);
        console.log (error.message);
      }
}
const getAccessToken = async (authorization_token, isSignin = true) => {
    const google_access_token_endpoint = 'https://oauth2.googleapis.com/token';

    const access_token_params = {
        client_id: process.env.CLIENT_APP_ID,
        client_secret: process.env.CLIENT_APP_SECRET,
        code: authorization_token,
        grant_type: 'authorization_code',
        redirect_uri: isSignin ? 'http://localhost:3001/api/users/google/callback/signin' : 'http://localhost:3001/api/users/google/callback/signup'
      };
      const response = await axios ({
        method: 'post',
        url: `${google_access_token_endpoint}?${query_string.stringify (access_token_params)}`,
      });

      return response.data.access_token;
}

const get_profile_data = async access_token => {
    const response = await axios ({
      method: 'post',
      url: `https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${access_token}`,
    });
    return response.data
  };


export const signupWithGoogle = async (req, res) => {
	try {
		const authorization_token = req.query.code;
        const access_token = await getAccessToken(authorization_token, false);
        const user_profile = await get_profile_data(access_token);

        const user = await User.findOne({ email: user_profile.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

        const newUser = {
            firstName: user_profile.given_name,
            lastName: user_profile.family_name,
            pic: user_profile.picture,
            email: user_profile.email
        }        
        await new User(newUser).save();
        // res.status(201).send({ message: "User created successfully", isSuccessfull: true });
        res.redirect(`http://localhost:3000/login?msg=${"created"}`)
    }   catch (error) {
		res.status(500).send({ message: "Internal Server Error", error:error,  isSuccessfull: false });
	}
};

export const signinWithGoogle = async (req, res) => {
    try {
        const authorization_token = req.query.code;
        const access_token = await getAccessToken(authorization_token);
        const user_profile = await get_profile_data(access_token);

        const user = await User.findOne({ email: user_profile.email });
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });

        const token = user.generateAuthToken();
       // res.status(200).send({ data: token, message: "Logged in successfully", userData: user });
        res.redirect(`http://localhost:3000/login?token=${token}&role=${user.role}&pic=${user.pic}`)
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error", error:error,  isSuccessfull: false });
    }

}