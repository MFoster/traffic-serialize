import JsonSerializer from "./JsonSerializer";
import util from "lodash";

export default class QueryParamSerializer {

    serialize(data) {
        var str = this._serialize(data, "");
        str = str.replace(/&+/gi, '&').replace(/^&/, "");
        return str;
    }

    _serialize(obj, ancestor) {
        var str = "", item;
        if (!util.isObject(obj)) {
            return encodeURIComponent(obj);
        }
        for (var key in obj) {
            item = obj[key];
            if (typeof item == "object") {
                if (ancestor) {
                    str += "&" + this._serialize(item, ancestor + "[" + key + "]");
                }
                else {
                    str += "&" + this._serialize(item, key);
                }
            }
            else if (ancestor) {
                str += "&" + ancestor + "[" + encodeURIComponent(key) + "]=" + encodeURIComponent(item);
            }
            else {
                str += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(item);
            }
        }
        return str;
    }
}