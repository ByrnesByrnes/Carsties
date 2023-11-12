"use client";

import React from "react";
import Countdown, { zeroPad } from "react-countdown";

interface RendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

interface Props {
    auctionEnd: string;
}

// Renderer callback with condition
const renderer: React.FC<RendererProps> = ({ days, hours, minutes, seconds, completed }) => {

    return (
        <div className={`border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center ${completed ? "bg-red-600" : (days === 0 && hours < 10) ? "bg-amber-600" : "bg-green-600"}`}>
            {completed ? <span>
                Auction Finished
            </span> : <span suppressHydrationWarning>{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>}
        </div>
    );
};

const CountdownTimer: FC<Props> = ({ auctionEnd }) => <Countdown date={auctionEnd} renderer={renderer} />;

export default CountdownTimer;