
import { Request, Response } from 'express';
import CreateMessageService from '../services/CreateMessageService';
import ProfileUserService from '../services/ProfileUserService';

export default class ProfileUserController {

    profileUserService: ProfileUserService;

    constructor() { }

    async handle(req: Request, res: Response): Promise<any> {
        const { user_id } = req;

        const result = await this.profileUserService.execute(user_id);

        return res.json(result);

    }
}