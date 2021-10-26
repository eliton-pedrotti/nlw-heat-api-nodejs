
import { Request, Response } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

export default class AuthenticateUserController {

    service = new AuthenticateUserService();

    constructor() { }

    async handle(req: Request, res: Response): Promise<any> {

        const { code } = req.body;

        try {
            const result = await this.service.execute(code);
            return res.json(result);
        } catch (error) {
            return res.json({
                error: error.message
            });
        }
    }
}