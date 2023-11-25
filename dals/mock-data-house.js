import { ObjectId } from "mongodb";
export const db_house = {
    houses: [
        {
            _id: new ObjectId(),
            name: "Ribeira Charming Duplex",
            description: "Fantastic duplex apartment with three bedrooms",
            address: {
                street: "Porto, Porto, Portugal",
                country: "Portugal",
                country_code: "PT",
            },
            bedrooms: 3,
            beds: 5,
            reviews: [
                {
                    _id: "58663741",
                    comment: "A casa da Ana e do Gonçalo foram o local escolhido.",
                    date: new Date("1921-11-2"),
                    reviewer: "juan",
                },
                {
                    _id: "62413197",
                    comment: "We are french's students, we traveled some days in Porto.",
                    date: new Date("1934-07-21"),
                    reviewer: "juan",
                }
            ]
        },
        {
            _id: new ObjectId(),
            name: "3 chambres au coeur du Plateau",
            description: "Notre appartement comporte 3 chambres avec chacune un lit queen",
            address: {
                street: "Montréal, Québec, Canada",
                country: "Montreal",
                country_code: "CA",
            },
            bedrooms: 3,
            beds: 3,
            reviews: [
                {
                    _id: "58685576",
                    comment: "房東姐姐人不僅漂亮還非常nice!東西都準備得很齊全,牙刷牙膏,甚至是喝水的杯子和潤膚乳都準備好了!住得非常開心!房子的地段也很好,離太子地鐵站和深水埗地鐵站都不遠,交通方便!下次去香港還想住在這裡!.",
                    date: new Date("1977-07-21"),
                    reviewer: "Xi ying",
                },
                {
                    _id: "58082044",
                    comment: "Vikki (the host) so considerate, transparent and generous. She was very professional yet it felt like I was travelling with home to HongKong. Her home is fully equipped and at the heart of HK.",
                    date: new Date("1934-07-21"),
                    reviewer: "Vikkie el Vikingo",
                }
            ]
        },
        {
            _id: new ObjectId(),
            name: "Casa Rural 3R Completa",
            description: "Fantastic duplex apartment with three bedrooms",
            address: {
                street: "Don Álvaro, Badajoz, España",
                country: "España",
                country_code: "ES",
            },
            bedrooms: 5,
            beds: 8,
            reviews: [
                {
                    _id: "34563741",
                    comment: "Muy amables, se nos pasó decirles cuantos eramos y lo solucionaron.",
                    date: new Date("1999-07-21"),
                    reviewer: "El Zorro",
                },
                {
                    _id: "62411237",
                    comment: "Nos encantó la piscina y billar.",
                    date: new Date("2022-07-21"),
                    reviewer: "Don Sancho de la Mancha",
                }
            ]
        }
    ]
};
