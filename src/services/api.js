import axios from "axios";

export const fetchImages = async (query, page) => {
    const myId = "iSKP5196MBc4T24uNRP5_o_-NMQLRCuvBBDxjxdqP_I";

    const url = new URL("https://api.unsplash.com/search/photos");
    url.searchParams.append("client_id", myId);
    url.searchParams.append("query", query);
    url.searchParams.append("page", page);
    url.searchParams.append("per_page", 21);

    const response = await axios.get(url.toString());
    return response.data;
};