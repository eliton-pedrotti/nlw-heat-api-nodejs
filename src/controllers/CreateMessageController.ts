
import { Request, Response } from 'express';
import CreateMessageService from '../services/CreateMessageService';

export default class CreateMessageController {

    createMessageService = new CreateMessageService();

    constructor() { }

    async handle(req: Request, res: Response): Promise<any> {

        const { message } = req.body;
        const { user_id } = req;

        const result = await this.createMessageService.execute(message, user_id);

        return res.json(result);
    }
}