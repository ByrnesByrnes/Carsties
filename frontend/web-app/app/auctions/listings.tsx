"use client";

import { useEffect, useState } from "react";
import AppPagination from "../components/app-pagination";
import { Auction, PagedResult } from "../interfaces";
import AuctionCard from "./auction-card";
import { getData } from "../actions/auctionActions";
import Filters from "./filters";
import { useParamsStore } from "../hooks/use-params-store";
import { shallow } from "zustand/shallow";
import qs from "query-string";
import EmptyFilter from "../components/empty-filter";

const Listings = () => {
    const [data, setData] = useState<PagedResult<Auction>>();
    const params = useParamsStore(state => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        searchTerm: state.searchTerm,
        orderBy: state.orderBy,
        filterBy: state.filterBy
    }), shallow);

    const setParams = useParamsStore(state => state.setParams);
    const url = qs.stringifyUrl({ url: "", query: params });

    const setPageNumber = (pageNumber: number) => {
        setParams({ pageNumber });
    };

    useEffect(() => {
        getData(url).then(data => setData(data));
    }, [url]);

    if (!data) return <h3>Loading...</h3>;

    return (
        <>
            <Filters />
            {data.totalCount === 0 ?
                <EmptyFilter showReset /> :
                <>
                    <div className="grid grid-cols-4 gap-6">
                        {data.results.map((auction) => <AuctionCard key={auction.id} auction={auction} />)}
                    </div>
                    <div className="flex justify-center mt-4">
                        <AppPagination
                            currentPage={params.pageNumber}
                            pageCount={data.pageCount}
                            onPageChange={setPageNumber}
                        />
                    </div>
                </>
            }
        </>
    );
};

export default Listings;