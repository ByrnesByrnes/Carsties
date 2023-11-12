"use client";

import { AiOutlineCar } from "react-icons/ai";
import { useParamsStore } from "../hooks/use-params-store";

const Logo = () => {
    const reset = useParamsStore(state => state.reset);

    return (
        <button onClick={() => reset()} className="flex items-center gap-2 text-3xl font-semibold text-red-500">
            <AiOutlineCar size={34} />
            <span>Carsties Auction</span>
        </button>
    );
};
export default Logo;