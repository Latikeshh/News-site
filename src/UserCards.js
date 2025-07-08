import React from 'react'
import assain from './images/assain2.png'

const UserCards = () => {

    const cards = [
        {
            id: 1,
            title: "first",
            description: "1 description",
            img: assain

        },
        {
            id: 2,
            title: "first",
            description: "2 description",
            img: assain

        },
        {
            id: 3,
            title: "first",
            description: "3 description",
            img: assain

        },
        {
            id: 4,
            title: "first",
            description: "4 description",
            img: assain

        },
        {
            id: 5,
            title: "first",
            description: "5 description",
            img: assain

        },
        {
            id: 6,
            title: "first",
            description: "6 description",
            img: assain

        },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {cards.map(card =>
                <div key={card.id} className="bg-white shadow-md rounded-2xl overflow-hiden">
                    <img src={card.img} alt={card.title} />
                    <div>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                </div>
            )}

        </div>
    )
}
export default UserCards
