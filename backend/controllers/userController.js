import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({success: false, message: "User does not exist" });
        }
        
        // Check if password is correct
        const isMatch= await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({success: false, message: "Invalid password" });
        }

        // Create a token for the user
        const token = createToken(user._id);
        res.json({success: true, token });

    } catch (error) {
        res.json({success: false, message: "Error occurred during login" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET)
}



//register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({success: false, message: "User already exists" });
        }
        // Validate email format and password strength
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Invalid email format" });
        }

        if(password.length < 8) {
            return res.json({success: false, message: "Password must be at least 8 characters long" });
        }

        // Hashing the user password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        // Save the user to the database
        const user = await newUser.save();

        // Create a token for the user
        const token = createToken(user._id);

        res.json({success: true, token });

    } catch (error) {
        res.json({success:false,message:"Error"});
    }
}

export { loginUser, registerUser };