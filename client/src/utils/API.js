import axios from "axios";
const BASEURL = "http://api.qrserver.com/v1/create-qr-code/?size=100x100&data="

export default {
    getQrCode: function(query) {
        return axios.get(BASEURL + encodeURIComponent(query));
    }
}