import { ObjectId } from "mongodb";
import { db_house } from "../../mock-data-house.js";
const insertHouse = (house) => {
    const id = new ObjectId();
    const newHouse = {
        ...house,
        _id: id,
    };
    db_house.houses = [...db_house.houses, newHouse];
    return newHouse;
};
const updateHouse = (house) => {
    db_house.houses = db_house.houses.map((b) => (b._id.toHexString() === house._id.toHexString() ? { ...b, ...house } : b));
    return house;
};
const paginateHouseList = (houseList, page, pageSize) => {
    let paginatedHouseList = [...houseList];
    if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
        paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
    }
    return paginatedHouseList;
};
export const mockRepositoryHouse = {
    getHouseList: async (page, pageSize) => paginateHouseList(db_house.houses, page, pageSize),
    getHouse: async (id) => db_house.houses.find((b) => b._id.toHexString() === id),
    saveHouse: async (house) => Boolean(house._id) ? updateHouse(house) : insertHouse(house),
    insertCommentInHouse: async (reviewIn, idIn) => {
        const filter = { "_id": idIn };
        const update = {
            reviews: reviewIn,
        };
        const houseToUpdate = db_house.houses.find((house) => house._id.toString() === idIn.toHexString());
        // Si la casa existe, agrega el nuevo comentario
        if (houseToUpdate) {
            houseToUpdate.reviews.push(reviewIn);
            console.log("Comentario agregado con éxito:", update);
        }
        else {
            console.log("No se encontró la casa con el ID proporcionado.");
        }
        console.log(update);
        return true;
    },
    deleteHouse: async (id) => {
        db_house.houses = db_house.houses.filter((b) => b._id.toHexString() !== id);
        return true;
    },
};
