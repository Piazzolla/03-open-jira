import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data =
    | { message: string }
    | IEntry


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'El id no es valido' })
    }

    switch (req.method) {
        case 'PUT':
            console.log('put');
            return updateEntry(req, res);

        default:
            return res.status(400).json({ message: 'El id no es valido' })
    }

}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {

    const { id } = req.query;

    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate) {
        await db.disconnect();
        return res.status(400).json({ message: 'No hay entrada con el ID ' + id });
    }
    
    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status,
    } = req.body;
    
    try {
        const updatedEntry = await Entry.findByIdAndUpdate(
            id,
            { description, status },
            { runValidators: true, new: true }
        ); 
        
        // otra forma de hacerlo:
        // entryToUpdate.description = description;
        // entryToUpdate.status = status;
        // await entryToUpdate.save();
        
        return res.status(200).json(updatedEntry!); //el ! es que siempre va atener un valor porque ya lo resvisamos
        
    } catch (error: any) {
        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message.message})
    }

}

