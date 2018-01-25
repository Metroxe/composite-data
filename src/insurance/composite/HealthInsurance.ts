import {DataComposite} from "../../index";
import {IDataMap} from "../../model";
import {CarrierName} from "../leaf/CarrierName";

abstract class HealthInsurance<M extends IHealthInsuranceMap> extends DataComposite<M> {}

interface IHealthInsuranceMap extends IDataMap {
    carrierName: CarrierName;
}

export {IHealthInsuranceMap, HealthInsurance};
