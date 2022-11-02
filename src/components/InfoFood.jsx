import React, { useState, useEffect, Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { countrySelect, foodgroupSelect, foodsubgroupSelect } from "./Selects";

import { motion } from "framer-motion/dist/framer-motion";

import celerygreen from "./Allergens/celery-green.png";
import egggreen from "./Allergens/egg-green.png";

import milkgreen from "./Allergens/milk-green.png";
import fishgreen from "./Allergens/fish-green.png";

import crustaceansgreen from "./Allergens/crustaceans-green.png";
import lupingreen from "./Allergens/lupin-green.png";

import glutengreen from "./Allergens/gluten-green.png";
import molluscgreen from "./Allergens/mollusc-green.png";

import mustardgreen from "./Allergens/mustard-green.png";
import nutsgreen from "./Allergens/nuts-green.png";

import peanutsgreen from "./Allergens/peanuts-green.png";
import sesamegreen from "./Allergens/sesame-green.png";

import soybeangreen from "./Allergens/soybean-green.png";
import sulphitegreen from "./Allergens/sulphite-green.png";
import notresultsgreen from "./Allergens/not-results-green.png";

import logoTTinfo from "./logoTT_info.png";

//import {ChakraProvider, extendTheme} from "@chakra-ui/react";
//import {Steps, Step, useSteps, StepsStyleConfig} from 'chakra-ui-steps';

import Creatable, { useCreatable } from "react-select/creatable";

//https://bluuweb.github.io/react-udemy/07-crud-firestore/#agregar-documentos
import {
  doc,
  collection,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Collapse,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Navbar,
} from "reactstrap";
import { displayPartsToString } from "typescript";
import { Wrap } from "@chakra-ui/react";

//import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function InfoFood({
  defaultValue,
  foodsCollectionRefs,
  handleCloseInfo,
  setFoods,
  showInfo,
  foods,
}) {
  const azuloscuro = "#196694";
  const grisblanco = "f9f9f9";

  return (
    <CardBody>
      <CardTitle>
        <div className="row">
          <div className="col-sm-5 col-lg-2">
            


              <img src={logoTTinfo} alt="TTHubs MED FOOD" height="80" />
            
          </div>

          <div className="col-sm-6 col-lg-6">
          <h2 style={{ color: azuloscuro, fontSize: 20, marginRight: "50px"}}>
            <h4
              style={{
                fontWeight: "bold",
                marginTop: "0.3em",
                marginLeft: "1.2em ",
              }}
            >
              {defaultValue.Name}
            </h4>
            </h2>
          </div>


          <div className="col-auto"  style={{ marginLeft: "150px"}}>
            <Button
              className="btn-xs"
              outline
              style={{ fontSize: 0.2, height: "1px", marginTop: "27px"}}

              color="danger"
              onClick={handleCloseInfo}
            >
              <label style={{ fontSize: 10 }}>X</label>
            </Button>
          </div>

        </div>
      </CardTitle>
      <hr size="8px" color="#196694" />

      <CardBody>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <h3 style={{ color: azuloscuro, fontWeight: "bold" }}>
              NUTRITION
              <br></br>
              FACTS
              <br></br>
              <small style={{ color: azuloscuro, fontWeight: "bold" }}>
                per 100gr
              </small>
              <hr size="8px" color="#E7E7E7" />
            </h3>
            <table>
              <tr>
                <th style={{ fontSize: 15, color: azuloscuro }}>
                  ENERGY (KCAL/KJ)
                </th>
              </tr>

              <tbody className="text-success">
                <tr>
                  <td style={{ fontSize: 24 }}>
                    {defaultValue.Energy} / {defaultValue.Energykj}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div
              className="flex-container"
              style={{
                height: "25px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "flex-start",
                alignItems: "baseline",
                justifyContent: "flex-start",
                gap: "15px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  color: azuloscuro,

                  flexShrink: "3",
                  fontWeight: "bold",
                }}
                className="col-6"
              >
                Amount/100gr
              </label>
              <label
                style={{
                  color: azuloscuro,
                  display: "flex",

                  fontWeight: "bold",
                }}
                className="col-6"
              >
                %Daily Value*
              </label>
            </div>
            <hr size="8px" color="#196694" />
            <div className="row">
              <label className="col-6" style={{ fontWeight: "bold" }}>
                Total fat
                {" " + defaultValue.TotalLipids}g{" "}
              </label>
              <div className="col-6" style={{ fontWeight: "bold" }}>
                {((defaultValue.TotalLipids * 100) / 70).toFixed(2)} %
              </div>
            </div>
            <div className="row">
              <label className="col-6">
                Saturated fat {" " + defaultValue.SaturatedFattyAcids}g{" "}
              </label>
              <div className="col-6">
                {((defaultValue.SaturatedFattyAcids * 100) / 20).toFixed(2)} %
              </div>
            </div>
            <div className="row">
              <label className="col-6">
                Trans fat
                {" " + defaultValue.TransFattyAcids}g{" "}
              </label>
            </div>
            <div className="row">
              <label className="col-6" style={{ fontWeight: "bold" }}>
                Cholesterol {" " + defaultValue.Cholesterol}
                mg{" "}
              </label>
              <div className="col-6" style={{ fontWeight: "bold" }}>
                {((defaultValue.Cholesterol * 100) / 300).toFixed(2)} %
              </div>
            </div>
            <div className="row">
              <label className="col-6" style={{ fontWeight: "bold" }}>
                Sodium
                {" " + defaultValue.Sodium}g{" "}
              </label>
              <div className="col-6" style={{ fontWeight: "bold" }}>
                {defaultValue.Sodium
                  ? ((defaultValue.Sodium * 100) / 6).toFixed(2)
                  : 0}{" "}
                %
              </div>
            </div>
            <hr size="8px" color="#E7E7E7" />
          </div>

          <div className="col-sm-6 col-lg-3">
            <div
              className="flex-container"
              style={{
                height: "25px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "flex-start",
                alignItems: "baseline",
                justifyContent: "flex-start",
                gap: "15px",
              }}
            >
              <label
                style={{
                  color: azuloscuro,
                  display: "flex",
                  flexShrink: "3",
                  fontWeight: "bold",
                }}
              >
                Amount/100gr
              </label>
              <label
                style={{
                  color: azuloscuro,
                  display: "flex",
                  flexShrink: "3",
                  fontWeight: "bold",
                }}
              >
                %Daily Value*
              </label>
            </div>
            <hr color="#196694" />
            <div className="row">
              <label className="col-6" style={{ fontWeight: "bold" }}>
                Total carbohydrate
                {" " + defaultValue.TotalCarbohydrates}g{" "}
              </label>
              <div className="col-6" style={{ fontWeight: "bold" }}>
                {" "}
                {((defaultValue.TotalCarbohydrates * 100) / 260).toFixed(2)} %
              </div>
            </div>
            <div className="row">
              <label className="col-6">Fiber {defaultValue.Fiber}g </label>
              <div className="col-6">
                {defaultValue.Fiber
                  ? ((defaultValue.Fiber * 100) / 25).toFixed(2)
                  : 0}
                %{" "}
              </div>
            </div>
            <div className="row">
              <label className="col-6">
                Total sugars
                {" " + defaultValue.TotalSugars}g{" "}
              </label>
              <div className="col-6">
                {((defaultValue.TotalSugars * 100) / 90).toFixed(2)} %
              </div>
            </div>
            <div className="row">
              <label className="col-6" style={{ fontWeight: "bold" }}>
                Proteins
                {" " + defaultValue.TotalProteins}g{" "}
              </label>
              <div className="col-6" style={{ fontWeight: "bold" }}>
                {((defaultValue.TotalProteins * 100) / 50).toFixed(2)} %
              </div>
            </div>
            <div className="row">
              <label className="col-6" style={{ fontWeight: "bold" }}>
                Water
                {" " + defaultValue.Water}g{" "}
              </label>
              <div className="col-6" style={{ fontWeight: "bold" }}>
                {((defaultValue.Water * 100) / 200).toFixed(2)} %
              </div>
            </div>
            <hr size="8px" color="#E7E7E7" />
          </div>

          <div textAlign="right" className="col-sm-6 col-lg-3">
            * The % Daily Value (DV) tells you how much a nutrient in a serving
            of food contributes to a daily diet. 2.000 calories a day is used
            for general nutrition advice.
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3"></div>
          <div className="col-sm">
            List of vitamins/minerals {">"} 0:
            {defaultValue.Ash ? "Ash " + defaultValue.Ash + "mg · " : " "}
            {defaultValue.A ? "Vitamin A " + defaultValue.A + " mg · " : " "}
            {defaultValue.Iron ? "Iron " + defaultValue.Iron + "mg ·  " : " "}
            {defaultValue.BetaCarotenes
              ? "BetaCarotenes " + defaultValue.BetaCarotenes + "mg · "
              : " "}
            {defaultValue.B1 ? "Vitamin B1 " + defaultValue.B1 + " mg · " : " "}
            {defaultValue.B2
              ? "Vitamin B2 " + defaultValue.B2 + " mg ·  "
              : " "}
            {defaultValue.B3
              ? "Vitamin B3 " + defaultValue.B3 + " mg ·  "
              : " "}
            {defaultValue.B5
              ? "Vitamin B5 " + defaultValue.B5 + " mg · 5 "
              : " "}
            {defaultValue.B6
              ? "Vitamin B6 " + defaultValue.B6 + " mg ·  "
              : " "}
            {defaultValue.B8
              ? "Vitamin B8 " + defaultValue.B8 + " mg ·  "
              : " "}
            {defaultValue.B9
              ? "Vitamin B9 " + defaultValue.B9 + " mg ·  "
              : " "}
            {defaultValue.B12
              ? "Vitamin B12 " + defaultValue.B12 + " mg ·  "
              : " "}
            {defaultValue.C ? "Vitamin C " + defaultValue.C + " mg ·  " : " "}
            {defaultValue.D ? "Vitamin D " + defaultValue.D + " mg ·  " : " "}
            {defaultValue.E ? "Vitamin E " + defaultValue.E + " mg ·  " : " "}
            {defaultValue.K ? "Vitamin K " + defaultValue.K + " mg ·  " : " "}
            {defaultValue.Ethanol
              ? "Ethanol " + defaultValue.Ethanol + " mg ·  "
              : " "}
            {defaultValue.Calcium
              ? "Calcium " + defaultValue.Calcium + " mg ·  "
              : " "}
            {defaultValue.Potassium
              ? "Potassium " + defaultValue.Potassium + " mg ·  "
              : " "}
            {defaultValue.Phosphorus
              ? "Phosphorus " + defaultValue.Phosphorus + " mg ·  "
              : " "}
            {defaultValue.Iron ? "Iron " + defaultValue.Iron + " mg ·  " : " "}
            {defaultValue.Magnesium
              ? "Magnesium " + defaultValue.Magnesium + " mg ·  "
              : " "}
            {defaultValue.Zinc ? "Zinc " + defaultValue.Zinc + " mg ·  " : " "}
            {defaultValue.Copper
              ? "Copper " + defaultValue.Copper + " mg ·  "
              : " "}
            {defaultValue.Fluorine
              ? "Fluorine " + defaultValue.Fluorine + " mg ·  "
              : " "}
            {defaultValue.Iodine
              ? "Iodine " + defaultValue.Iodine + " mg ·  "
              : " "}
            {defaultValue.Manganese
              ? "Manganese " + defaultValue.Manganese + " mg ·  "
              : " "}
            {defaultValue.Selenium
              ? "Selenium " + defaultValue.Selenium + " mg ·  "
              : " "}
          </div>
        </div>
      </CardBody>

      <CardBody style={{ backgroundColor: grisblanco }}>
        <div
          className="flex-container"
          style={{
            height: "200px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            margin: "10px",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <div className="col-sm-6 col-lg-3" style={{ display: "inline" }}>
            <h6 style={{ color: azuloscuro }}>GROUP</h6>
            <p style={{ fontSize: 15 }}>{defaultValue.FoodGroup}</p>
            <h6 style={{ color: azuloscuro }}>SUBGROUP</h6>
            <p style={{ fontSize: 15 }}>{defaultValue.FoodSubgroup}</p>
            <hr align="left" className="col-sm-4"></hr>
            <h6 style={{ color: azuloscuro }}>COUNTRY</h6>
            <p style={{ fontSize: 15 }}>{defaultValue.Country}</p>
          </div>
          <div style={{ display: "inline", width: "60%" }}>
            <div style={{ display: "inline" }}>
              <h6 style={{ color: azuloscuro }}>FOOD ALLERGENS</h6>
            </div>
            <hr color="#196694"></hr>
            <br></br>
            <div style={{ display: "inline", flexShrink: "3" }}>
              <div
                className="flex-container"
                style={{
                  height: "100px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  justifyContent: "flex-start",
                }}
              >
                {/* <div className="row" style={{ justifyContent: "space-around" }}>
            <p style={{ fontSize: 15 }}>
              {(defaultValue.FoodGroup === 'Milk and milk products') ? 'MILK' : "no milk"}
              {(defaultValue.FoodGroup === 'Legumes, nuts, oilseeds, oilseeds and spices') ? 'LEGUME' : "no LEGUME"}
              <br></br></p>*/}

                {(!defaultValue.FoodGroup.toLowerCase().includes("sorgum") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "cereals"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("dough") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("pasta") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("soups") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("bread") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("pies") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("offal") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "shellfish"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "fish and shellfish"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "seafood"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("nuts") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("seeds") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "freshwater"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("fish") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("offal") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "shellfish"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("egg") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("eggs") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "cereals"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("nuts") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("seeds") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("dough") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("bread") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("pasta") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("pies") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("rice") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("nuts") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("seeds") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable fat"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable oils"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "chocolate"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("nut") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "dairy imitate based sweets"
                  ) &&
                  !defaultValue.FoodGroup.toLowerCase().includes("milk") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("infant") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("dough") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("bread") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("pasta") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("pies") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("rice") &&
                  !defaultValue.FoodGroup.toLowerCase().includes("cereals") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "soybean"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable fat"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable oils"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("pasta") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "noodles"
                  ) &&
                  !defaultValue.FoodGroup.toLowerCase().includes(
                    "condiments"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "excluding leafy vegetables"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetables dried"
                  ) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("wheat") &&
                  !defaultValue.FoodGroup.toLowerCase().includes("fish") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes("potato") &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "cereals"
                  ) &&
                  (!defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetables dried"
                  ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "mixed and unspecified"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "leafy vegetables"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "fruits dried"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "dough"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "fruits sweets"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "dairy or dairy imitate based sweets"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "herbs"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "condiments"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "alcoholic drinks"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "vegetable drinks"
                    ) &&
                    !defaultValue.FoodSubgroup.toLowerCase().includes(
                      "seafood"
                    )) &&
                  !defaultValue.FoodSubgroup.toLowerCase().includes(
                    "soups"
                  )) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        {" "}
                        <img src={notresultsgreen} height="60" />
                        <figcaption style={{ fontSize: 12 }}>
                          NOT RESULTS
                        </figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodGroup.toLowerCase().includes("sorgum") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("cereals") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("dough") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("pasta") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("soups") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("bread") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("pies")) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        {" "}
                        <img src={glutengreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>GLUTEN</figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes("offal") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "shellfish"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "fish and shellfish"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "seafood"
                  )) && (
                    <div
                      style={{
                        display: "inline",

                        marginRight: "10%",
                      }}
                    >
                      <figure>
                        {" "}
                        <img
                          src={crustaceansgreen}
                          title="crustaceos"
                          height="60"
                        />
                        <figcaption style={{ fontSize: 13 }}>
                          CRUSTACEANS
                        </figcaption>
                      </figure>
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes("nuts") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "seeds"
                  )) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        {" "}
                        <img src={sesamegreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>SESAME</figcaption>
                      </figure>
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes(
                  "freshwater"
                ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("fish") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("offal") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "shellfish"
                  )) && (
                    <div
                      style={{
                        display: "inline",
                        marginRight: "10%",
                        maxWidth: "200% !important",
                      }}
                    >
                      <figure style={{ maxWidth: "200% !important" }}>
                        <img
                          src={fishgreen}
                          height="60"
                          max-width="200% !important"
                        />
                        <figcaption style={{ fontSize: 13 }}>FISH</figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes("egg") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("eggs")) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        <img src={egggreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>EGGS</figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes("cereals") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("nuts") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("seeds") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("dough") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("bread") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("pasta") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("pies") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("rice")) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        <img src={lupingreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>LUPIN</figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes("nuts") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("seeds") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable fat"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable oils"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "chocolate"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("nut")) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        {" "}
                        <img
                          src={peanutsgreen}
                          height="60"
                          style={{ maxWidth: "200% !important" }}
                        />
                        <figcaption style={{ fontSize: 13 }}>PEANUTS</figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes(
                  "dairy imitate based sweets"
                ) ||
                  defaultValue.FoodGroup.toLowerCase().includes("milk") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("infant") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("dough") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("bread") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("pasta") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("pies") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("rice")) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        {" "}
                        <img src={milkgreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>MILK</figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodGroup.toLowerCase().includes("cereals") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("soybean") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable fat"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable oils"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("pasta") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "noodles"
                  )) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        {" "}
                        <img src={soybeangreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>SOYBEAN</figcaption>
                      </figure>
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes(
                  "dairy imitate based sweets"
                ) ||
                  defaultValue.FoodGroup.toLowerCase().includes("condiments") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "excluding leafy vegetables"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetables dried"
                  )) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        <img src={celerygreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>CELERY</figcaption>
                      </figure>
                    </div>
                  )}

                {(defaultValue.FoodGroup.toLowerCase().includes("nuts") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("seeds") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable fat"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable oils"
                  )) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        {" "}
                        <img src={mustardgreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>MUSTARD</figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes("wheat") ||
                  defaultValue.FoodGroup.toLowerCase().includes("fish") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("potato") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("cereals") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetables dried"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "mixed and unspecified"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "leafy vegetables"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "fruits dried"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("dough") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "fruits sweets"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "dairy or dairy imitate based sweets"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("herbs") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "condiments"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "alcoholic drinks"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable drinks"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("seafood") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "soups"
                  )) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        {" "}
                        <img src={sulphitegreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>SULPHITE</figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodGroup.toLowerCase().includes("cereals") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("soybean") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable fat"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "vegetable oils"
                  ) ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("nuts") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes("seeds") ||
                  defaultValue.FoodGroup.toLowerCase().includes("cereals") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "pasta"
                  )) && (
                    <div
                      style={{
                        display: "inline",
                        marginRight: "10%",
                        maxWidth: "200% !important",
                      }}
                    >
                      <figure>
                        {" "}
                        <img
                          src={nutsgreen}
                          height="60"
                          style={{ maxWidth: "200" }}
                        />
                        <figcaption style={{ fontSize: 13 }}>NUTS</figcaption>
                      </figure>{" "}
                    </div>
                  )}

                {(defaultValue.FoodSubgroup.toLowerCase().includes(
                  "shellfish"
                ) ||
                  defaultValue.FoodGroup.toLowerCase().includes("fish") ||
                  defaultValue.FoodSubgroup.toLowerCase().includes(
                    "offal"
                  )) && (
                    <div style={{ display: "inline", marginRight: "10%" }}>
                      <figure>
                        {" "}
                        <img src={molluscgreen} height="60" />
                        <figcaption style={{ fontSize: 13 }}>MOLLUSC</figcaption>
                      </figure>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardBody>
        <h6 style={{ color: azuloscuro, fontWeight: "bold", marginLeft: "16px" }}>
          NUTRITIONAL CLAIMS
        </h6>
        <hr align="left" color="#196694" style={{ marginLeft: "16px" }}></hr>
        <div className="row" style={{ marginLeft: "16px" }}>
          <div
            className="flex-container"
            style={{
              height: "140px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "baseline",
              justifyContent: "flex-start",
              gap: "1px 20px"


            }}
          >
            {defaultValue.EnergyFree == true && (
              <div style={{ display: "inline" }}>Energy free</div>
            )}

            {defaultValue.LowEnergy == true && (
              <div style={{ display: "inline" }}>Low energy</div>
            )}

            {defaultValue.FatFree == true && (
              <div style={{ display: "inline" }}>Fat free</div>
            )}

            {defaultValue.LowFat == true && (
              <div style={{ display: "inline" }}>Low fat</div>
            )}

            {defaultValue.SugarsFree == true && (
              <div style={{ display: "inline" }}>Sugars free</div>
            )}

            {defaultValue.LowSugars == true && (
              <div style={{ display: "inline" }}>Low sugars</div>
            )}

            {defaultValue.SaturatedFatFree == true && (
              <div style={{ display: "inline" }}>Saturated fat free</div>
            )}

            {defaultValue.LowSaturatedFat == true && (
              <div style={{ display: "inline" }}>Low saturated fat</div>
            )}

            {defaultValue.SodiumFree == true && (
              <div style={{ display: "inline" }}>Sodium free</div>
            )}

            {defaultValue.LowSodium == true && (
              <div style={{ display: "inline" }}>Low sodium</div>
            )}

            {defaultValue.VeryLowSodium == true && (
              <div style={{ display: "inline" }}>Very low sodium</div>
            )}

            {defaultValue.HighFibre == true && (
              <div style={{ display: "inline" }}>High fibre</div>
            )}

            {defaultValue.SourceFibre == true && (
              <div style={{ display: "inline" }}>Source of fibre</div>
            )}

            {defaultValue.HighProtein == true && (
              <div style={{ display: "inline" }}>High protein</div>
            )}

            {defaultValue.SourceProtein == true && (
              <div style={{ display: "inline" }}>Source of protein</div>
            )}

            {defaultValue.HighMonounsaturatedFat == true && (
              <div style={{ display: "inline" }}>High monounsaturated fat</div>
            )}

            {defaultValue.HighPolyunsaturatedFat == true && (
              <div style={{ display: "inline" }}>High polyunsaturated fat</div>
            )}

            {defaultValue.HighUnsaturatedFat == true && (
              <div style={{ display: "inline" }}>High unsaturated fat</div>
            )}

            {defaultValue.HighA == true && (
              <div style={{ display: "inline" }}>High vitamin A</div>
            )}

            {defaultValue.SourceA == true && (
              <div style={{ display: "inline" }}>Source of vitamin A</div>
            )}

            {defaultValue.HighD == true && (
              <div style={{ display: "inline" }}>High vitamin D</div>
            )}

            {defaultValue.SourceD == true && (
              <div style={{ display: "inline" }}>Source of vitamin D</div>
            )}

            {defaultValue.HighE == true && (
              <div style={{ display: "inline" }}>High vitamin E</div>
            )}

            {defaultValue.SourceE == true && (
              <div style={{ display: "inline" }}>Source of vitamin E</div>
            )}

            {defaultValue.HighK == true && (
              <div style={{ display: "inline" }}>High vitamin K</div>
            )}

            {defaultValue.SourceK == true && (
              <div style={{ display: "inline" }}>Source of vitamin K</div>
            )}

            {defaultValue.HighC == true && (
              <div style={{ display: "inline" }}>High vitamin C</div>
            )}

            {defaultValue.SourceC == true && (
              <div style={{ display: "inline" }}>Source of vitamin C</div>
            )}

            {defaultValue.HighRiboflavin == true && (
              <div style={{ display: "inline" }}>High Riboflavin</div>
            )}

            {defaultValue.SourceRiboflavin == true && (
              <div style={{ display: "inline" }}>Source of Riboflavin</div>
            )}

            {defaultValue.HighNiacin == true && (
              <div style={{ display: "inline" }}>High Niacin</div>
            )}

            {defaultValue.SourceNiacin == true && (
              <div style={{ display: "inline" }}>Source of Niacin</div>
            )}

            {defaultValue.HighB6 == true && (
              <div style={{ display: "inline" }}>High vitamin B6</div>
            )}

            {defaultValue.SourceB6 == true && (
              <div style={{ display: "inline" }}>Source of vitamin B6</div>
            )}

            {defaultValue.HighFolicAcid == true && (
              <div style={{ display: "inline" }}>High Folic Acid</div>
            )}

            {defaultValue.SourceFolicAcid == true && (
              <div style={{ display: "inline" }}>Source of Folic Acid</div>
            )}

            {defaultValue.HighB12 == true && (
              <div style={{ display: "inline" }}>High vitamin B12</div>
            )}

            {defaultValue.SourceB12 == true && (
              <div style={{ display: "inline" }}>Source of vitamin B12</div>
            )}

            {defaultValue.HighBiotin == true && (
              <div style={{ display: "inline" }}>High Biotin</div>
            )}

            {defaultValue.SourceBiotin == true && (
              <div style={{ display: "inline" }}>Source of Biotin</div>
            )}

            {defaultValue.HighB5 == true && (
              <div style={{ display: "inline" }}>High vitamin B5</div>
            )}

            {defaultValue.SourceB5 == true && (
              <div style={{ display: "inline" }}>Source of vitamin B5</div>
            )}

            {defaultValue.HighThiamin == true && (
              <div style={{ display: "inline" }}>High Thiamin</div>
            )}

            {defaultValue.SourceThiamin == true && (
              <div style={{ display: "inline" }}>Source of Thiamin</div>
            )}

            {defaultValue.HighPotassium == true && (
              <div style={{ display: "inline" }}>High Potassium</div>
            )}

            {defaultValue.SourcePotassium == true && (
              <div style={{ display: "inline" }}>Source of Potassium</div>
            )}

            {defaultValue.HighCalcium == true && (
              <div style={{ display: "inline" }}>High Calcium</div>
            )}

            {defaultValue.SourceCalcium == true && (
              <div style={{ display: "inline" }}>Source of Calcium</div>
            )}

            {defaultValue.HighPhosphorus == true && (
              <div style={{ display: "inline" }}>High Phosphorus</div>
            )}

            {defaultValue.SourcePhosphorus == true && (
              <div style={{ display: "inline" }}>Source of Phosphorus</div>
            )}

            {defaultValue.HighMagnesium == true && (
              <div style={{ display: "inline" }}>High Magnesium</div>
            )}

            {defaultValue.SourceMagnesium == true && (
              <div style={{ display: "inline" }}>Source of Magnesium</div>
            )}

            {defaultValue.HighIron == true && (
              <div style={{ display: "inline" }}>High Iron</div>
            )}

            {defaultValue.SourceIron == true && (
              <div style={{ display: "inline" }}>Source of Iron</div>
            )}

            {defaultValue.HighZinc == true && (
              <div style={{ display: "inline" }}>High Zinc</div>
            )}

            {defaultValue.SourceZinc == true && (
              <div style={{ display: "inline" }}>Source of Zinc</div>
            )}

            {defaultValue.HighCopper == true && (
              <div style={{ display: "inline" }}>High Copper</div>
            )}

            {defaultValue.SourceCopper == true && (
              <div style={{ display: "inline" }}>Source of Copper</div>
            )}

            {defaultValue.HighManganese == true && (
              <div style={{ display: "inline" }}>High Manganese</div>
            )}

            {defaultValue.SourceManganese == true && (
              <div style={{ display: "inline" }}>Source of Manganese</div>
            )}

            {defaultValue.HighFluorine == true && (
              <div style={{ display: "inline" }}>High Fluorine</div>
            )}

            {defaultValue.SourceFluorine == true && (
              <div style={{ display: "inline" }}>Source of Fluorine</div>
            )}
            {defaultValue.HighSelenium == true && (
              <div style={{ display: "inline" }}>High Selenium</div>
            )}

            {defaultValue.SourceSelenium == true && (
              <div style={{ display: "inline" }}>Source of Selenium</div>
            )}

            {defaultValue.HighIodine == true && (
              <div style={{ display: "inline" }}>High Iodine</div>
            )}

            {defaultValue.SourceIodine == true && (
              <div style={{ display: "inline" }}>Source of Iodine</div>
            )}
          </div>
        </div>
      </CardBody>
      <ModalFooter>
       
      </ModalFooter>
    </CardBody >
  );
}
