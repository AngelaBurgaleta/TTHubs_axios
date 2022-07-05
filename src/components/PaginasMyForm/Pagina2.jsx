import React from "react";

import { Input } from "reactstrap";

export default function Pagina1({
  defaultValue,
  showInfo,
  ashInput,
  aInput,
  betacarotenesInput,
  b1Input,
  b2Input,
  ethanolInput,
  sodiumInput,
  calciumInput,
  potassiumInput,
  phosphorusInput,
  b3Input,
  b5Input,
  b6Input,
  b8Input,
  b9Input,
  ironInput,
  magnesiumInput,
  zincInput,
  copperInput,
  fluorineInput,
  b12Input,
  cInput,
  dInput,
  eInput,
  kInput,
  iodineInput,
  manganeseInput,
  seleniumInput,
  edibleportionInput,
  waterInput,
}) {
  return (
    <div className="row">
      <div className="col-sm-6 col-lg-4">
        <label>Ash(g/100g)</label>
        <div className="form-group">
          <Input
            name={ashInput.name}
            defaultValue={defaultValue?.Ash}
            readOnly={showInfo}
            innerRef={ashInput.ref}
            onChange={ashInput.onChange}
            onBlur={ashInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>A: Retinol(µg/100g)</label>
        <div className="form-group">
          <Input
            name={aInput.name}
            defaultValue={defaultValue?.A}
            readOnly={showInfo}
            innerRef={aInput.ref}
            onChange={aInput.onChange}
            onBlur={aInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>

        <label>Beta-carotenes(µg/100g)</label>
        <div className="form-group">
          <Input
            name={betacarotenesInput.name}
            defaultValue={defaultValue?.BetaCarotenes}
            readOnly={showInfo}
            innerRef={betacarotenesInput.ref}
            onChange={betacarotenesInput.onChange}
            onBlur={betacarotenesInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>B1: Thiamine(mg/100g)</label>
        <div className="form-group">
          <Input
            name={b1Input.name}
            defaultValue={defaultValue?.B1}
            readOnly={showInfo}
            innerRef={b1Input.ref}
            onChange={b1Input.onChange}
            onBlur={b1Input.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>

        <label>B2: Riboflavin(mg/100g)</label>
        <div className="form-group">
          <Input
            name={b2Input.name}
            defaultValue={defaultValue?.B2}
            readOnly={showInfo}
            innerRef={b2Input.ref}
            onChange={b2Input.onChange}
            onBlur={b2Input.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
      </div>

      <div className="col-sm-6 col-lg-4">
        <label>B3: Niacin(mg/100g)</label>
        <div className="form-group">
          <Input
            name={b3Input.name}
            defaultValue={defaultValue?.B3}
            readOnly={showInfo}
            innerRef={b3Input.ref}
            onChange={b3Input.onChange}
            onBlur={b3Input.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>B5: Pantothenic Acid(mg/100g)</label>
        <div className="form-group">
          <Input
            name={b5Input.name}
            defaultValue={defaultValue?.B5}
            readOnly={showInfo}
            innerRef={b5Input.ref}
            onChange={b5Input.onChange}
            onBlur={b5Input.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>B6: Pyridoxine(mg/100g)</label>
        <div className="form-group">
          <Input
            name={b6Input.name}
            defaultValue={defaultValue?.B6}
            readOnly={showInfo}
            innerRef={b6Input.ref}
            onChange={b6Input.onChange}
            onBlur={b6Input.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>B8: Biotin(mg/100g)</label>
        <div className="form-group">
          <Input
            name={b8Input.name}
            defaultValue={defaultValue?.B8}
            readOnly={showInfo}
            innerRef={b8Input.ref}
            onChange={b8Input.onChange}
            onBlur={b8Input.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>B9: Folic Acid(µg/100g)</label>
        <div className="form-group">
          <Input
            name={b9Input.name}
            defaultValue={defaultValue?.B9}
            readOnly={showInfo}
            innerRef={b9Input.ref}
            onChange={b9Input.onChange}
            onBlur={b9Input.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
      </div>

      <div className="col-sm-6 col-lg-4">
        <label>B12: Cobalamin(µg/100g)</label>
        <div className="form-group">
          <Input
            name={b12Input.name}
            defaultValue={defaultValue?.B12}
            readOnly={showInfo}
            innerRef={b12Input.ref}
            onChange={b12Input.onChange}
            onBlur={b12Input.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>C: Ascorbic Acid(mg/100g)</label>
        <div className="form-group">
          <Input
            name={cInput.name}
            defaultValue={defaultValue?.C}
            readOnly={showInfo}
            innerRef={cInput.ref}
            onChange={cInput.onChange}
            onBlur={cInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>D: Calciferol(µg/100g)</label>
        <div className="form-group">
          <Input
            name={dInput.name}
            defaultValue={defaultValue?.D}
            readOnly={showInfo}
            innerRef={dInput.ref}
            onChange={dInput.onChange}
            onBlur={dInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>E: Tocopherol(mg/100g)</label>
        <div className="form-group">
          <Input
            name={eInput.name}
            defaultValue={defaultValue?.E}
            readOnly={showInfo}
            innerRef={eInput.ref}
            onChange={eInput.onChange}
            onBlur={eInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>K(µg/100g)</label>
        <div className="form-group">
          <Input
            name={kInput.name}
            defaultValue={defaultValue?.K}
            readOnly={showInfo}
            innerRef={kInput.ref}
            onChange={kInput.onChange}
            onBlur={kInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
      </div>

      <div className="col-sm-6 col-lg-4">
        <label>Ethanol(g/100g)</label>

        <div className="form-group">
          <Input
            name={ethanolInput.name}
            defaultValue={defaultValue?.Ethanol}
            readOnly={showInfo}
            innerRef={ethanolInput.ref}
            onChange={ethanolInput.onChange}
            onBlur={ethanolInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>

        <label>Sodium(mg/100g)</label>
        <div className="form-group">
          <Input
            name={sodiumInput.name}
            defaultValue={defaultValue?.Sodium}
            readOnly={showInfo}
            innerRef={sodiumInput.ref}
            onChange={sodiumInput.onChange}
            onBlur={sodiumInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>

        <label>Calcium(mg/100g)</label>
        <div className="form-group">
          <Input
            name={calciumInput.name}
            defaultValue={defaultValue?.Calcium}
            readOnly={showInfo}
            innerRef={calciumInput.ref}
            onChange={calciumInput.onChange}
            onBlur={calciumInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>Potassium(mg/100g)</label>
        <div className="form-group">
          <Input
            name={potassiumInput.name}
            defaultValue={defaultValue?.Potassium}
            readOnly={showInfo}
            innerRef={potassiumInput.ref}
            onChange={potassiumInput.onChange}
            onBlur={potassiumInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>Phosphorus(mg/100g)</label>
        <div className="form-group">
          <Input
            name={phosphorusInput.name}
            defaultValue={defaultValue?.Phosphorus}
            readOnly={showInfo}
            innerRef={phosphorusInput.ref}
            onChange={phosphorusInput.onChange}
            onBlur={phosphorusInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
      </div>

      <div className="col-sm-6 col-lg-4">
        <label>Iron(mg/100g)</label>
        <div className="form-group">
          <Input
            name={ironInput.name}
            defaultValue={defaultValue?.Iron}
            readOnly={showInfo}
            innerRef={ironInput.ref}
            onChange={ironInput.onChange}
            onBlur={ironInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>Magnesium(mg/100g)</label>
        <div className="form-group">
          <Input
            name={magnesiumInput.name}
            defaultValue={defaultValue?.Magnesium}
            readOnly={showInfo}
            innerRef={magnesiumInput.ref}
            onChange={magnesiumInput.onChange}
            onBlur={magnesiumInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>Zinc(mg/100g)</label>
        <div className="form-group">
          <Input
            name={zincInput.name}
            defaultValue={defaultValue?.Zinc}
            readOnly={showInfo}
            innerRef={zincInput.ref}
            onChange={zincInput.onChange}
            onBlur={zincInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>Copper(mg/100g)</label>
        <div className="form-group">
          <Input
            name={copperInput.name}
            defaultValue={defaultValue?.Copper}
            readOnly={showInfo}
            innerRef={copperInput.ref}
            onChange={copperInput.onChange}
            onBlur={copperInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>Fluorine(mg/100g)</label>
        <div className="form-group">
          <Input
            name={fluorineInput.name}
            defaultValue={defaultValue?.Fluorine}
            readOnly={showInfo}
            innerRef={fluorineInput.ref}
            onChange={fluorineInput.onChange}
            onBlur={fluorineInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
      </div>

      <div className="col-sm-6 col-lg-4">
        <label>Iodine(µg/100g)</label>
        <div className="form-group">
          <Input
            name={iodineInput.name}
            defaultValue={defaultValue?.Iodine}
            readOnly={showInfo}
            innerRef={iodineInput.ref}
            onChange={iodineInput.onChange}
            onBlur={iodineInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>Manganese(mg/100g)</label>
        <div className="form-group">
          <Input
            name={manganeseInput.name}
            defaultValue={defaultValue?.Manganese}
            readOnly={showInfo}
            innerRef={manganeseInput.ref}
            onChange={manganeseInput.onChange}
            onBlur={manganeseInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>

        <label>Selenium(µg/100g)</label>
        <div className="form-group">
          <Input
            name={seleniumInput.name}
            defaultValue={defaultValue?.Selenium}
            readOnly={showInfo}
            innerRef={seleniumInput.ref}
            onChange={seleniumInput.onChange}
            onBlur={seleniumInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>Edible Portion(%)</label>
        <div className="form-group">
          <Input
            name={edibleportionInput.name}
            defaultValue={defaultValue?.EdiblePortion}
            readOnly={showInfo}
            innerRef={edibleportionInput.ref}
            onChange={edibleportionInput.onChange}
            onBlur={edibleportionInput.onBlur}
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
        <label>Water(g/100g)</label>
          <div className="form-group">
            <Input
              name={waterInput.name}
              defaultValue={defaultValue?.Water}
              readOnly={showInfo}
              innerRef={waterInput.ref}
              onChange={waterInput.onChange}
              onBlur={waterInput.onBlur}
              type="number"
              min="0"
              step="0.0001"
            />
          </div>
      </div>
    </div>
  );
}
