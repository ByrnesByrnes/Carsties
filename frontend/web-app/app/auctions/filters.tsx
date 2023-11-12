import { Button } from "flowbite-react";
import { useParamsStore } from "../hooks/use-params-store";
import { AiOutlineClockCircle, AiOutlineSortAscending } from "react-icons/ai";
import { BsFillStopCircleFill, BsStopwatchFill } from "react-icons/bs";
import { GiFinishLine, GiFlame } from "react-icons/gi";
import { ElementType } from "react";

interface ButtonType {
    label: string;
    icon: ElementType;
    value: string;
}

const pageSizeButtons = [4, 8, 12];
const orderButtons: ButtonType[] = [
    {
        label: "Alphabetical",
        icon: AiOutlineSortAscending,
        value: "make"
    },
    {
        label: "End Date",
        icon: AiOutlineClockCircle,
        value: "endingSoon"
    },
    {
        label: "Recently Added",
        icon: BsFillStopCircleFill,
        value: "new"
    }
];

const filterButtons: ButtonType[] = [
    {
        label: "Live Auctions",
        icon: GiFlame,
        value: "live"
    },
    {
        label: "Ending < 6 hours",
        icon: GiFinishLine,
        value: "endingSoon"
    },
    {
        label: "Completed",
        icon: BsStopwatchFill,
        value: "finished"
    }
];

const Filters = () => {
    const pageSize = useParamsStore(state => state.pageSize);
    const setParams = useParamsStore(state => state.setParams);
    const orderBy = useParamsStore(state => state.orderBy);
    const filterBy = useParamsStore(state => state.orderBy);

    return (
        <div className="flex justify-between item-center mb-4">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                    <span className="uppercase text-sm text-gray-500 mr-2">Filter By</span>
                    <Button.Group>
                        {filterButtons.map(({ label, icon: Icon, value }) =>
                            <Button
                                key={value}
                                onClick={() => setParams({ filterBy: value })}
                                className="focus:ring-0"
                                color={filterBy === value ? "red" : "gray"}
                            >
                                <Icon className="mr-3 h-4" />
                                {label}
                            </Button>
                        )}
                    </Button.Group>
                </div>
                <div>
                    <span className="uppercase text-sm text-gray-500 mr-2">Order By</span>
                    <Button.Group>
                        {orderButtons.map(({ label, icon: Icon, value }) =>
                            <Button
                                key={value}
                                onClick={() => setParams({ orderBy: value })}
                                className="focus:ring-0"
                                color={orderBy === value ? "red" : "gray"}
                            >
                                <Icon className="mr-3 h-4" />
                                {label}
                            </Button>
                        )}
                    </Button.Group>
                </div>
            </div>
            <div>
                <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
                <Button.Group>
                    {pageSizeButtons.map(value =>
                        <Button
                            className="focus:ring-0"
                            key={value}
                            onClick={() => setParams({ pageSize: value })}
                            color={pageSize === value ? "red" : "gray"}
                        >
                            {value}
                        </Button>)}
                </Button.Group>
            </div>
        </div>
    );
};

export default Filters;