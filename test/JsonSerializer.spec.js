import JsonSerializer from "../src/JsonSerializer";
import { assert } from "chai";
import { stub } from "./fixtures";

describe("Json Serializer", ()=>{

    it("should serialize an object", ()=>{
        const s = new JsonSerializer();
        const str = s.serialize(stub);
        assert.equal(str, "{\"prop\":\"abc\"}");
    });

    it("should be able to unserialize an object", ()=>{
        const s = new JsonSerializer();
        const obj = s.unserialize("{\"prop\":\"abc\"}");
        assert.deepEqual(obj, stub);
    });
});