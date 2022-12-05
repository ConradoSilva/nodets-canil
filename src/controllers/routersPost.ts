import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'

export const anoPost = (req:Request, res:Response) => {
    let result: number = 0;
    let anoBoolean: boolean = false;

    console.log(req.body.anos);

    if(req.body.anos){
        let anoNascimento: number = parseInt(req.body.anos as string);
        let anoAtual: number = new Date().getFullYear();

        result = anoAtual - anoNascimento;
        anoBoolean = true;
    };

    res.render('pages/idade',{
        menu: createMenuObject('idade'),
        result,
        anoBoolean
    });
};