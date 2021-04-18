import React from 'react';
import PressOrderCard from '../PressOrderCard/PressOrderCard';

const availableFood = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        foodItem: 'set-plater-1',
        visitingHour: '8:00 AM - 9:00 AM',
        price:220,
        totalQuantity: 10
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        foodItem: 'set-plater-2',
        visitingHour: '10:50 AM - 11:30 AM',
        price:420,
        totalQuantity: 10
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        foodItem: 'set-plater-3',
        visitingHour: '5:00 PM - 6:00 PM',
        price:220,
        totalQuantity: 10
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        foodItem: 'set-plater-4',
        visitingHour: '7:00 AM - 8:30 AM',
        price:820,
        totalQuantity: 10
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        foodItem: 'set-plater-5',
        visitingHour: '8:00 AM - 9:00 AM',
        price:2200,
        totalQuantity: 10
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        foodItem: 'set-plater-6',
        visitingHour: '8:00 AM - 9:00 AM',
        price:2200,
        totalQuantity: 10
    }
]

const PressOrder = ({date}) => {
    return (
        <section>
            <h1 className="text-center text-brand mb-5">{date}Available food on nearby your</h1>

            <div className="row">
                {
                    availableFood.map(food => <PressOrderCard food={food} date={date} key={food.id}></PressOrderCard>)
                }
            </div>
        </section>
    );
};

export default PressOrder;