
import { Request, Response } from 'express';
import GetLast3MessagesService from '../services/GetLast3MessagesService';

export default class GetLast3MessagesController {

    getLast3MessagesService = new GetLast3MessagesService();

    constructor() { }

    async handle(req: Request, res: Response): Promise<any> {
        const result = await this.getLast3MessagesService.execute();

        return res.json(result);
    }
}