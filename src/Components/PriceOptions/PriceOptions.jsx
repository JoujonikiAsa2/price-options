import React from 'react';
import PriceOption from './PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training area",
                "Locker room access",
                "Personal training available for an additional fee"
            ],
            "price": 30
        },
        {
            "id": 2,
            "name": "Silver Membership",
            "features": [
                "All Basic Membership features",
                "Access to group fitness classes",
                "Sauna and steam room access",
                "Nutrition consultation included",
                "Discounts on personal training sessions"
            ],
            "price": 50
        },
        {
            "id": 3,
            "name": "Gold Membership",
            "features": [
                "All Silver Membership features",
                "Access to swimming pool",
                "Towel service",
                "Access to premium fitness classes",
                "Complimentary personal training sessions"
            ],
            "price": 80
        },
        {
            "id": 4,
            "name": "Student Membership",
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training area",
                "Student ID required",
                "No initiation fee"
            ],
            "price": 25
        },
        {
            "id": 5,
            "name": "Family Membership",
            "features": [
                "Access for two adults and two children",
                "Access to all gym facilities",
                "Discounts on kids' fitness programs",
                "Sauna and steam room access",
                "Monthly family fitness challenges"
            ],
            "price": 120
        },
        {
            "id": 6,
            "name": "Senior Membership",
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training area",
                "Ages 60+",
                "Silver Sneakers program included"
            ],
            "price": 20
        }
    ]

    return (
        <div className='m-12'>
            <h2 className="text-5xl py-6">Bet prices in the town</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }

            </div>
        </div>
    );
};

export default PriceOptions;