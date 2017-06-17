import QueryParamserializer from "../src/QueryParamSerializer";
import { assert } from "chai";
import { stub, nest, person } from "./fixtures";

describe("QueryParamSerializer", ()=>{
    it("should be able to serialize an object", ()=>{
        const s = new QueryParamserializer();
        const str = s.serialize(stub);
        assert.equal(str, "prop=abc");
    });

    it("should be able to serialize a nested object", ()=>{
        const s = new QueryParamserializer();
        const str = s.serialize(nest);
        assert.equal(str, "root[document][body]=test&root[document][forms][0]=howard&root[docket][0]=1&root[docket][1]=2&root[docket][2]=3&root[name]=nothing&root[age]=0");
    });
})