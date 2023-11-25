import { db } from '#core/servers/index.js';
import { ObjectId } from "mongodb";
export const dbRepository = {
    getHouseList: async (page, pageSize) => {
        const skip = Boolean(page) ? (page - 1) * pageSize : 0;
        const limit = (pageSize !== null && pageSize !== undefined && pageSize >= 0) ? pageSize : 0;
        return await db.collection("houses").find()
            .skip(skip)
            .limit(limit)
            .toArray();
    },
    getHouse: async (id) => {
        const result = await db?.collection('houses').findOne({ _id: new ObjectId(id) });
        if (result) {
            // Hacer un cast al tipo House, asumiendo que result tiene las propiedades correctas
            return result;
        }
        else {
            return null;
        }
    },
    saveHouse: async (house) => {
        const { insertedId } = await db.collection('houses').insertOne(house);
        return {
            ...house,
            _id: insertedId
        };
    },
    insertCommentInHouse: async (reviewIn, idIn) => {
        const filter = { "_id": idIn };
        const update = {
            $push: {
                reviews: reviewIn,
            },
        };
        const result = await db.collection('houses').updateOne(filter, update);
        //const result = await db.collection('houses').findOneAndUpdate(filter, update);
        console.log(result);
        return true;
    },
    deleteHouse: async (id) => {
        const { deletedCount } = await db?.collection('houses').deleteOne({ _id: new ObjectId(id), });
        return deletedCount === 1;
    },
};
