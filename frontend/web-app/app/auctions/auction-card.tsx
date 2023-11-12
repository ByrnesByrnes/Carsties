import React from "react";
import CountdownTimer from "./countdown-timer";
import CarImage from "./car-image";
import { Auction } from "../interfaces";

interface Props {
    auction: Auction;
}

const AuctionCard: React.FC<Props> = ({ auction }) => (
    <a href="#" className="group">
        <div className="w-full bg-gray-200 aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
            <div>
                <CarImage src={auction.imageUrl} alt={auction.make} />
                <div className="absolute bottom-2 left-2">
                    <CountdownTimer auctionEnd={auction.auctionEnd} />
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-4">
            <h3 className="text-gray-700">{auction.make}</h3>
            <p className="font-semibold text-sm">{auction.year}</p>
        </div>
    </a>
);

export default AuctionCard;