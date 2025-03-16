import axios from "axios";
import { Image } from "../App";

interface ApiResponse {
    results: Image[];
    total_pages: number;
}

export const fetchImages = async (query: string, page: number) => {
    const myId = "iSKP5196MBc4T24uNRP5_o_-NMQLRCuvBBDxjxdqP_I";

    const url = new URL("https://api.unsplash.com/search/photos");
    url.searchParams.append("client_id", myId);
    url.searchParams.append("query", query);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("per_page", "21");

    try {
        const response = await axios.get<ApiResponse>(url.toString());
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
        throw error;
    }
};
