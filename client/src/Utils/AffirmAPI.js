import Axios from "axios";

const BASEURL = "https://www.affirmations.dev/"

export default {
    search: function(query) {
        return Axios.get(BASEURL + query)
    }
}