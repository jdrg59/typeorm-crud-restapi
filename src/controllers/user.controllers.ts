//functions from folder routes
import { Request, Response } from 'express'
import { User } from '../entities/user'

export const createUser = async (req: Request, res: Response) => {

    try {
        const { firstname, lastname } = req.body
        
        //throw new Error('my error!!')  //error testing

        const user = new User()
        user.firstname = firstname
        user.lastname = lastname

        //save in database
        await user.save()
        console.log(user);

        return res.json(user)
        //res.send('hello word')
    } catch (error) {
        //return res.json(error)
        if(error instanceof Error ){
            return res.status(500).json({message: error.message})
        }
    }
}