import {expect} from "chai";
import {DataArray, GenericDate, GenericString, GenericBoolean} from "../dist";
import {IData} from "../src/model";

describe("DataArray Tests", () => {
	const dateObj: Date = new Date();
	const IDataArray: IData[] = [
		new GenericString("generic"),
		new GenericBoolean(true),
		new GenericBoolean(false),
		new GenericDate(new Date()),
	];
	const genericArray: DataArray = new DataArray();

	it("pass on proper array", () => {
		expect(genericArray.set(IDataArray, true)).to.be.true;
		expect(genericArray.set([], true)).to.be.true;
	});

	it("fail on other data types", () => {
		expect(genericArray.set(0, true)).to.be.false;
		expect(genericArray.set(true, true)).to.be.false;
		expect(genericArray.set({}, true)).to.be.false;
		expect(genericArray.set(dateObj.getDate(), true)).to.be.false;
		expect(genericArray.set(dateObj.toISOString(), true)).to.be.false;
		expect(genericArray.set(dateObj.toDateString(), true)).to.be.false;
		expect(genericArray.set(dateObj.toDateString(), true)).to.be.false;
	});

	it("fail on data that is invalid", () => {
		expect(genericArray.set(IDataArray, true)).to.be.true;
		const genericBoolean: GenericBoolean = new GenericBoolean();
		expect(genericBoolean.set("not a boolean", true)).to.be.false;
		IDataArray.push(genericBoolean);
		expect(genericArray.isValid()).to.be.false;
		IDataArray.pop();
		expect(genericArray.isValid()).to.be.true;
	});
});
