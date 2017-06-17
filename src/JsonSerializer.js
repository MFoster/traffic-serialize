export default class JsonSerializer{
    serialize(obj) {
        return JSON.stringify(obj);
    }
    unserialize(obj) {
        return JSON.parse(obj);
    }
}