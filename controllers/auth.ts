import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user'
import { generateToken } from '../helpers/generate-jsonwebtoken'
import { Auth } from '../types'
import { googleVerify } from '../helpers/validate-google'

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {
        // Look for user by email
        const findUser = await User.findOne({ where: { email } })

        // Get dataValues as plain object
        const user: Auth = findUser?.get({ plain: true })

        //Verify is user is active
        if (!user.status) {
            return res.status(400).json({
                msg: 'invalid email or password - status'
            })
        }

        //Verify if password is correct
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400)
        }

        //Create JWT
        const token = await generateToken(user.id)

        res.json({
            msg: 'Login successfully',
            token,
            user: {
                id: user.id,
                name: user.full_name,
                email: user.email,
            }
        })

    } catch (error) {
        res.status(500).json({
            msg: 'invalid email or password'
        });
    }
}

export const googleSignIn = async (req: Request, res: Response) => {
    const { id_token } = req.headers;

    try {
        //Verify if token is valid
        const payload = await googleVerify(id_token as string);

        // Look for user by email
        const findUser = await User.findOne({ where: { email: payload?.email } })

        // Get dataValues as plain object
        let user = findUser?.get({ plain: true })

        //Verify if user exists and then create a new user
        if (!user) {
            const data = {
                full_name: payload?.name,
                email: payload?.email,
                password: 'google sign password',
                google: true
            }

            user = await User.create(data);

        }

        //Verify if user is active
        if (!user.status) {
            return res.status(401).json({
                msg: 'contact support - user blocked'
            })
        }

        //Create JWT
        const token = await generateToken(user.id);

        res.json({
            msg: 'Login successfully',
            token,
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
            }
        })

    } catch (error) {
        res.status(500).json({
            msg: 'invalid Google token'
        });
    }
}
