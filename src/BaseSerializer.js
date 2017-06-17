export default class BaseSerializer{
    serialize(obj) {
        return obj.toString();
    }
    unserialize(obj) {
        return obj;
    }
}