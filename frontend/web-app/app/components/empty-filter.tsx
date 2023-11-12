"use client";

import { Button } from "flowbite-react";
import { useParamsStore } from "../hooks/use-params-store";
import Heading from "./heading";

interface Props {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

const EmptyFilter: React.FC<Props> = ({ title, subtitle, showReset }) => {
    const reset = useParamsStore(state => state.reset);

    return (
        <div className="h-[40vh] flex flex-col gap-2 justify-center items-center">
            <Heading
                title={title ?? "No Matches for this filter"}
                subtitle={subtitle ?? "Try changing or resetting the filter"}
                center
            />
            {showReset &&
                <div className="mt-4">
                    <Button outline onClick={() => reset()}>Remove Filters</Button>
                </div>
            }
        </div>
    );
};
export default EmptyFilter;