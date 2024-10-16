const {z} = require('zod');

const express = require('express');
const userRouter = express.Router();


const validInputCheck = z.object({
  username: z
  .string()
  .min(3, "Username must be at least 3 characters long")
  .max(20, "Username cannot exceed 20 characters")
  .regex(
    /^[a-zA-Z0-9]+$/,
    "Username can only contain alphanumeric characters"
  ),
  password: z
  .string()
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password cannot exceed 64 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
    email: z.string().email("Invalid email format"),
}); 

userRouter.post('/register', async (req, res) => {
  try {
    const validatedInput = validInputBody.parse(req.body);
    // Save user to database
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({ message: error.errors });
  }
});

module.exports = userRouter;