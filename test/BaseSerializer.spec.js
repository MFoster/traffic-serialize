import BaseSerializer from "../src/BaseSerializer";
import { assert } from "chai";
import { stub } from "./fixtures";

describe("BaseSerializer", ()=>{
    it("should serialize", ()=>{
        const s = new BaseSerializer();
        const str = s.serialize(stub);
        console.log(str);
    });
    it("should unserialize", ()=>{
        const s = new BaseSerializer();
        const obj = s.unserialize("String");

        assert.equal(obj, "String");
    });
})