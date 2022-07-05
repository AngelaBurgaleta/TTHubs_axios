import React from "react";
import { Input } from "reactstrap";

export default function Pagina3({
  energyValue,
  totalLipidsValue,
  saturatedFattyAcidsValue,
  totalSugarsValue,
  sodiumValue,
  fibreValue,
  totalProteinValue,
  monounsaturatedFattyAcidsValue,
  polyunsaturatedFattyAcidsValue,
  unsaturatedFattyAcidsValue,
}) {
  return (
    <div className="row">
      <div className="col-sm-4 col-lg-2">
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(energyValue) < 40 && Number(energyValue) > 4}
            readOnly={true}
          />
          <div className="form-check-sign">
            <label>Low energy</label>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(energyValue) <= 4 ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">Energy free</span>
          </div>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(totalLipidsValue) < 3 && Number(totalLipidsValue) > 0.5
                ? true
                : false
            }
            readOnly={true}
          />
          <div className="form-check-sign">
            <label>Low fat</label>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(totalLipidsValue) <= 0.5 ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">Fat free</span>
          </div>
        </div>
      </div>

      <div className="col-sm-4 col-lg-2">
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(saturatedFattyAcidsValue) < 1.5 &&
              Number(saturatedFattyAcidsValue) > 0.1
                ? true
                : false
            }
            readOnly={true}
          />
          <div className="form-check-sign">
            <label>Low saturated fat</label>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(saturatedFattyAcidsValue) <= 0.1 ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">Saturated fat free</span>
          </div>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(totalSugarsValue) < 5 && Number(totalSugarsValue) > 0.5
                ? true
                : false
            }
            readOnly={true}
          />

          <div className="form-check-sign">
            <label>Low sugars</label>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(totalSugarsValue) <= 0.5 ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">Sugars free</span>
          </div>
        </div>
      </div>

      <div className="col-sm-4 col-lg-2">
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(sodiumValue) < 120 && Number(sodiumValue) > 40
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Low sodium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(sodiumValue) <= 40 && Number(sodiumValue) > 5
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Very low sodium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(sodiumValue) <= 5 ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">Sodium free</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(fibreValue) <= 6 && Number(fibreValue) > 3 ? true : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of fibre</span>
        </div>
      </div>

      <div className="col-sm-4 col-lg-2">
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(fibreValue) > 6 ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High fibre</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(totalProteinValue) <= 0.2 * Number(energyValue) &&
              Number(totalProteinValue) > 0.12 * Number(energyValue)
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of protein</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(totalProteinValue) > 0.2 * Number(energyValue)
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">High protein</span>
        </div>
      </div>

      <div className="col-sm-4 col-lg-3">
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(monounsaturatedFattyAcidsValue) > 0.2 * Number(energyValue)
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">High monounsaturated fat</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(polyunsaturatedFattyAcidsValue) > 0.2 * Number(energyValue)
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">High polyunsaturated fat</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(unsaturatedFattyAcidsValue) > 0.2 * Number(energyValue)
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">High unsaturated fat</span>
        </div>
      </div>
    </div>
  );
}
