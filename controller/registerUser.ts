import { Request, Response } from "express"
import RegisterUser from "../module/User";

export const RegisterUsers = async (req: Request, res: Response) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Please provide details"
            });
        }
        const { FullName, Email, Phone } = req.body;
        try {
            const isUserAlreadyInDb = await RegisterUser.findOne({ Email });
            const isPhoneNumberInDb = await RegisterUser.findOne({ Phone });

            if (isUserAlreadyInDb || isPhoneNumberInDb) {
                return res.status(400).json({
                    message: "User already registered with this Email or Phone number"
                });
            }
            const newUser = await RegisterUser.create({
                FullName,
                Email,
                Phone
            });
            return res.status(201).json({
                user: newUser
            });
        } catch (error: any) {
            return res.json({
                message: error?.message
            })
        }

    } catch (error: any) {
        return res.json({
            message: error?.message
        })
    }
}