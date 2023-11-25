import { ObjectId } from "mongodb";
export const mapHouseFromModelToApi = (house) => ({
    id: house._id.toHexString(),
    name: house.name,
    description: house.description,
    address: {
        street: house.address.street,
        country: house.address.country,
        country_code: house.address.country_code,
    },
    bedrooms: house.bedrooms,
    beds: house.beds,
    reviews: house.reviews.map(review => ({
        _id: review._id,
        comments: review.comment,
        reviewer: review.reviewer,
        date: review.date,
    })),
});
export const maphouseListFromModelToApi = (houseList) => houseList.map(mapHouseFromModelToApi);
export const mapHouseFromApiToModel = (house) => ({
    _id: new ObjectId(house.id),
    name: house.name,
    description: house.description,
    address: {
        street: house.address.street,
        country: house.address.country,
        country_code: house.address.country_code,
    },
    bedrooms: house.bedrooms,
    beds: house.beds,
    reviews: house.reviews.map(review => ({
        _id: review._id,
        comment: review.comments,
        reviewer: review.reviewer,
        date: new Date(),
    })),
});
export const mapHouseListFromApiToModel = (houseList) => [];
export const mapReviewFromApiModelToModel = (review) => ({
    _id: new ObjectId().toString(),
    comment: review.comment,
    reviewer: review.reviewer,
    date: new Date(),
});
