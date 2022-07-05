import React from "react";
import { Input } from "reactstrap";

export default function ({
  aValue,
  eValue,
  kValue,
  dValue,
  cValue,
  riboflavinValue,
  niacinValue,
  b6Value,
  folicAcidValue,
  b12Value,
  biotinValue,
  pantothenicAcidValue,
  thiaminValue,
  potassiumValue,
  calciumValue,
  phosphorusValue,
  magnesiumValue,
  ironValue,
  zincValue,
  copperValue,
  manganeseValue,
  fluorineValue,
  seleniumValue,
  iodineValue,
  aRDA,
  eRDA,
  kRDA,
  dRDA,
  cRDA,
  riboflavinRDA,
  niacinRDA,
  b6RDA,
  folicAcidRDA,
  b12RDA,
  biotinRDA,
  pantothenicAcidRDA,
  thiaminRDA,
  potassiumRDA,
  calciumRDA,
  phosphorusRDA,
  magnesiumRDA,
  ironRDA,
  zincRDA,
  copperRDA,
  manganeseRDA,
  fluorineRDA,
  seleniumRDA,
  iodineRDA,
}) {
  return (
    <div className="row">
      <div className="col-sm-4 col-lg-3">
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(aValue) > 0.15 * aRDA && Number(aValue) <= 0.3 * aRDA
                ? true
                : false
            }
            readOnly={true}
          />
          <div className="form-check-sign">
            <label>Source of Vitamin A</label>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(aValue) > 0.3 * aRDA ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">High Vitamin A</span>
          </div>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(eValue) > 0.15 * eRDA && Number(eValue) <= 0.3 * eRDA
                ? true
                : false
            }
            readOnly={true}
          />
          <div className="form-check-sign">
            <label>Source of Vitamin E</label>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(eValue) > 0.3 * eRDA ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">High Vitamin E</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(kValue) > 0.15 * kRDA && Number(kValue) <= 0.3 * kRDA
                  ? true
                  : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">Source Vitamin K</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(kValue) > 0.3 * kRDA ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">High Vitamin K</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(cValue) > 0.15 * cRDA && Number(cValue) <= 0.3 * cRDA
                  ? true
                  : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">Source of Vitamin C</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(cValue) > 0.3 * cRDA ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">High Vitamin C</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(dValue) > 0.15 * dRDA && Number(dValue) <= 0.3 * dRDA
                  ? true
                  : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">Source of Vitamin D</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(dValue) > 0.3 * dRDA ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">High Vitamin D</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(riboflavinValue) > 0.15 * riboflavinRDA &&
                Number(riboflavinValue) <= 0.3 * riboflavinRDA
                  ? true
                  : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">Source of Riboflavin</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(riboflavinValue) > 0.3 * riboflavinRDA ? true : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">High Riboflavin</span>
          </div>
        </div>
      </div>

      <div className="col-sm-4 col-lg-3">
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(niacinValue) > 0.15 * niacinRDA &&
              Number(niacinValue) <= 0.3 * niacinRDA
                ? true
                : false
            }
            readOnly={true}
          />
          <div className="form-check-sign">
            <label>Source of Niacin</label>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(niacinValue) > 0.3 * niacinRDA ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">High Niacin</span>
          </div>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(b6Value) > 0.15 * b6RDA && Number(b6Value) <= 0.3 * b6RDA
                ? true
                : false
            }
            readOnly={true}
          />
          <div className="form-check-sign">
            <label>Source of Vitamin B6</label>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(b6Value) > 0.3 * b6RDA ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">High Vitamin B6</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(folicAcidValue) > 0.15 * folicAcidRDA &&
                Number(folicAcidValue) <= 0.3 * folicAcidRDA
                  ? true
                  : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">Source of Folic acid</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(folicAcidValue) > 0.3 * folicAcidRDA ? true : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">High Folic Acid</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(b12Value) > 0.15 * b12RDA &&
                Number(b12Value) <= 0.3 * b12RDA
                  ? true
                  : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">Source of Vitamin B12</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(b12Value) > 0.3 * b12RDA ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">High Vitamin B12</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(biotinValue) > 0.15 * biotinRDA &&
                Number(biotinValue) <= 0.3 * biotinRDA
                  ? true
                  : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">Source of Biotin</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={Number(biotinValue) > 0.3 * biotinRDA ? true : false}
              readOnly={true}
            />

            <span className="form-check-sign">High Biotin</span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(pantothenicAcidValue) > 0.15 * pantothenicAcidRDA &&
                Number(pantothenicAcidValue) <= 0.3 * pantothenicAcidRDA
                  ? true
                  : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">Source of Pantothenic acid </span>
          </div>
          <div className="form-group">
            <Input
              type="checkbox"
              className="form-check-input"
              checked={
                Number(pantothenicAcidValue) > 0.3 * pantothenicAcidRDA
                  ? true
                  : false
              }
              readOnly={true}
            />

            <span className="form-check-sign">High Pantothenic acid</span>
          </div>
        </div>
      </div>

      <div className="col-sm-4 col-lg-3">
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(thiaminValue) > 0.15 * thiaminRDA &&
              Number(thiaminValue) <= 0.3 * thiaminRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Thiamin</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(thiaminValue) > 0.3 * thiaminRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Thiamin</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(potassiumValue) > 0.15 * potassiumRDA &&
              Number(potassiumValue) <= 0.3 * potassiumRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Potassium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(potassiumValue) > 0.3 * potassiumRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Potassium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(calciumValue) > 0.15 * calciumRDA &&
              Number(calciumValue) <= 0.3 * calciumRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Calcium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(calciumValue) > 0.3 * calciumRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Calcium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(phosphorusValue) > 0.15 * phosphorusRDA &&
              Number(phosphorusValue) <= 0.3 * phosphorusRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Phosphorus</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(phosphorusValue) > 0.3 * phosphorusRDA ? true : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">High Phosphorus</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(magnesiumValue) > 0.15 * magnesiumRDA &&
              Number(magnesiumValue) <= 0.3 * magnesiumRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Magnesium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(magnesiumValue) > 0.3 * magnesiumRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Magnesium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(ironValue) > 0.15 * ironRDA &&
              Number(ironValue) <= 0.3 * ironRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Iron</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(ironValue) > 0.3 * ironRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Iron</span>
        </div>
      </div>

      <div className="col-sm-4 col-lg-2">
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(zincValue) > 0.15 * zincRDA &&
              Number(zincValue) <= 0.3 * zincRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Zinc</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(zincValue) > 0.3 * zincRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Zinc</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(copperValue) > 0.15 * copperRDA &&
              Number(copperValue) <= 0.3 * copperRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Copper</span>
        </div>

        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(copperValue) > 0.3 * copperRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Copper</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(manganeseValue) > 0.15 * manganeseRDA &&
              Number(manganeseValue) <= 0.3 * manganeseRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Manganese</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(manganeseValue) > 0.3 * manganeseRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Manganese</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(fluorineValue) > 0.15 * fluorineRDA &&
              Number(fluorineValue) <= 0.3 * fluorineRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Fluorine</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(fluorineValue) > 0.3 * fluorineRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Fluorine</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(seleniumValue) > 0.15 * seleniumRDA &&
              Number(seleniumValue) <= 0.3 * seleniumRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Selenium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(seleniumValue) > 0.3 * seleniumRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Selenium</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={
              Number(iodineValue) > 0.15 * iodineRDA &&
              Number(iodineValue) <= 0.3 * iodineRDA
                ? true
                : false
            }
            readOnly={true}
          />

          <span className="form-check-sign">Source of Iodine</span>
        </div>
        <div className="form-group">
          <Input
            type="checkbox"
            className="form-check-input"
            checked={Number(iodineValue) > 0.3 * iodineRDA ? true : false}
            readOnly={true}
          />

          <span className="form-check-sign">High Iodine</span>
        </div>
      </div>
    </div>
  );
}
