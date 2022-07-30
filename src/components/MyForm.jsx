import React, { useState, useEffect, Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  countrySelect,
  foodgroupSelect,
  foodsubgroupSelect,
  districtSelect,
} from "./Selects";
import Pagina1 from "./PaginasMyForm/Pagina1";
import Pagina2 from "./PaginasMyForm/Pagina2";
import Pagina3 from "./PaginasMyForm/Pagina3";
import Pagina4 from "./PaginasMyForm/Pagina4";
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

//import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function MyForm({
  defaultValue,
  foodsCollectionRefs,
  handleClose,
  setFoods,
  showInfo,
}) {
  
  //console.log(country);
  

  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      FoodGroup: defaultValue?.FoodGroup || "",
      FoodSubgroup: defaultValue?.FoodSubgroup || "",
      Country: defaultValue?.Country || "",
      District: defaultValue?.District || "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  //Añadir nuevo registro de comida

  const aRDA = 800;
  const dRDA = 5;
  const eRDA = 12;
  const kRDA = 75;
  const cRDA = 80;
  const riboflavinRDA = 1.4;

  const niacinRDA = 16;
  const b6RDA = 1.4;
  const folicAcidRDA = 200;
  const b12RDA = 2.5;
  const biotinRDA = 50;
  const pantothenicAcidRDA = 6;

  const thiaminRDA = 1.1;
  const potassiumRDA = 2000;
  const calciumRDA = 800;
  const phosphorusRDA = 700;
  const magnesiumRDA = 375;
  const ironRDA = 14;

  const zincRDA = 10;
  const copperRDA = 1;
  const manganeseRDA = 2;
  const fluorineRDA = 3.5;
  const seleniumRDA = 55;
  const iodineRDA = 150;

  const addFood = async (datos) => {
    console.log(1, datos);

    //NUTRITIONAL CLAIMS PAGINA 3

    datos.LowEnergy =
      Number(energyValue) < 40 && Number(energyValue) > 4 ? true : false;
    datos.EnergyFree = Number(energyValue) <= 4 ? true : false;

    datos.LowFat =
      Number(totalLipidsValue) < 3 && Number(totalLipidsValue) > 0.5
        ? true
        : false;
    datos.FatFree = Number(totalLipidsValue) <= 0.5 ? true : false;

    datos.LowSaturatedFat =
      Number(saturatedFattyAcidsValue) < 1.5 &&
      Number(saturatedFattyAcidsValue) > 0.1
        ? true
        : false;
    datos.SaturatedFatFree =
      Number(saturatedFattyAcidsValue) <= 0.1 ? true : false;

    datos.LowSugars =
      Number(totalSugarsValue) < 5 && Number(totalSugarsValue) > 0.5
        ? true
        : false;
    datos.SugarsFree = Number(totalSugarsValue) <= 0.5 ? true : false;

    if (datos.Sodium) {
      datos.LowSodium =
        Number(sodiumValue) > 40 && Number(sodiumValue) < 120 ? true : false;
      datos.VeryLowSodium =
        Number(sodiumValue) <= 40 && Number(sodiumValue) > 5 ? true : false;
      datos.SodiumFree = Number(sodiumValue) <= 5 ? true : false;
    }

    if (datos.Fibre) {
      datos.HighFibre = Number(fibreValue) > 6 ? true : false;
      datos.SourceFibre =
        Number(fibreValue) <= 6 && Number(fibreValue) > 3 ? true : false;
    }

    datos.SourceProtein =
      Number(totalProteinValue) <= 0.2 * Number(energyValue) &&
      Number(totalProteinValue) > 0.12 * Number(energyValue)
        ? true
        : false;
    datos.HighProtein =
      Number(totalProteinValue) > 0.2 * Number(energyValue) ? true : false;

    if (datos.MonounsaturatedFattyAcids) {
      datos.HighMonounsaturatedFat =
        Number(monounsaturatedFattyAcidsValue) > 0.2 * Number(energyValue)
          ? true
          : false;
    }

    if (datos.PolyunsaturatedFattyAcids) {
      datos.HighPolyunsaturatedFat =
        Number(polyunsaturatedFattyAcidsValue) > 0.2 * Number(energyValue)
          ? true
          : false;
    }

    if (datos.UnsaturatedFattyAcids) {
      datos.HighUnsaturatedFat =
        Number(unsaturatedFattyAcidsValue) > 0.2 * Number(energyValue)
          ? true
          : false;
    }

    //NUTRITIONAL CLAIMS PAGINA 4

    datos.SourceA =
      (Number(aValue) + Number(carotenesValue)) > 0.15 * aRDA && (Number(aValue) + Number(carotenesValue))  <= 0.3 * aRDA
        ? true
        : false;

    datos.HighA = (Number(aValue) + Number(carotenesValue))  > 0.3 * aRDA ? true : false;

    if (datos.D) {
      datos.SourceD =
        Number(dValue) > 0.15 * dRDA && Number(dValue) <= 0.3 * dRDA
          ? true
          : false;

      datos.HighD = Number(dValue) > 0.3 * dRDA ? true : false;
    }

    if (datos.E) {
      datos.SourceE =
        Number(eValue) > 0.15 * eRDA && Number(eValue) <= 0.3 * eRDA
          ? true
          : false;

      datos.HighE = Number(eValue) > 0.3 * eRDA ? true : false;
    }

    if (datos.K) {
      datos.SourceK =
        Number(kValue) > 0.15 * kRDA && Number(kValue) <= 0.3 * kRDA
          ? true
          : false;

      datos.HighK = Number(kValue) > 0.3 * kRDA ? true : false;
    }

    if (datos.C) {
      datos.SourceC =
        Number(cValue) > 0.15 * cRDA && Number(cValue) <= 0.3 * cRDA
          ? true
          : false;

      datos.HighC = Number(cValue) > 0.3 * cRDA ? true : false;
    }

    if (datos.B2) {
      datos.SourceRiboflavin =
        Number(riboflavinValue) > 0.15 * riboflavinRDA &&
        Number(riboflavinValue) <= 0.3 * riboflavinRDA
          ? true
          : false;

      datos.HighRiboflavin =
        Number(riboflavinValue) > 0.3 * riboflavinRDA ? true : false;
    }

    if (datos.B3) {
      datos.SourceNiacin =
        Number(niacinValue) > 0.15 * niacinRDA &&
        Number(niacinValue) <= 0.3 * niacinRDA
          ? true
          : false;

      datos.HighNiacin = Number(niacinValue) > 0.3 * niacinRDA ? true : false;
    }

    if (datos.B6) {
      datos.SourceB6 =
        Number(b6Value) > 0.15 * b6RDA && Number(b6Value) <= 0.3 * b6RDA
          ? true
          : false;

      datos.HighB6 = Number(b6Value) > 0.3 * b6RDA ? true : false;
    }

    if (datos.B9) {
      datos.SourceFolicAcid =
        Number(folicAcidValue) > 0.15 * folicAcidRDA &&
        Number(folicAcidValue) <= 0.3 * folicAcidRDA
          ? true
          : false;

      datos.HighFolicAcid =
        Number(folicAcidValue) > 0.3 * folicAcidRDA ? true : false;
    }

    if (datos.B12) {
      datos.SourceB12 =
        Number(b12Value) > 0.15 * b12RDA && Number(b12Value) <= 0.3 * b12RDA
          ? true
          : false;

      datos.HighB12 = Number(b12Value) > 0.3 * b12RDA ? true : false;
    }

    if (datos.B8) {
      datos.SourceBiotin =
        Number(biotinValue) > 0.15 * biotinRDA &&
        Number(biotinValue) <= 0.3 * biotinRDA
          ? true
          : false;

      datos.HighBiotin = Number(biotinValue) > 0.3 * biotinRDA ? true : false;
    }

    if (datos.B5) {
      datos.SourceB5 =
        Number(pantothenicAcidValue) > 0.15 * pantothenicAcidRDA &&
        Number(pantothenicAcidValue) <= 0.3 * pantothenicAcidRDA
          ? true
          : false;

      datos.HighB5 =
        Number(pantothenicAcidValue) > 0.3 * pantothenicAcidRDA ? true : false;
    }

    if (datos.B1) {
      datos.SourceThiamin =
        Number(thiaminValue) > 0.15 * thiaminRDA &&
        Number(thiaminValue) <= 0.3 * thiaminRDA
          ? true
          : false;

      datos.HighThiamin =
        Number(thiaminValue) > 0.3 * thiaminRDA ? true : false;
    }

    if (datos.Potassium) {
      datos.SourcePotassium =
        Number(potassiumValue) > 0.15 * potassiumRDA &&
        Number(potassiumValue) <= 0.3 * potassiumRDA
          ? true
          : false;

      datos.HighPotassium =
        Number(potassiumValue) > 0.3 * potassiumRDA ? true : false;
    }

    if (datos.Calcium) {
      datos.SourceCalcium =
        Number(calciumValue) > 0.15 * calciumRDA &&
        Number(calciumValue) <= 0.3 * calciumRDA
          ? true
          : false;

      datos.HighCalcium =
        Number(calciumValue) > 0.3 * calciumRDA ? true : false;
    }

    if (datos.Phosphorus) {
      datos.SourcePhosphorus =
        Number(phosphorusValue) > 0.15 * phosphorusRDA &&
        Number(phosphorusValue) <= 0.3 * phosphorusRDA
          ? true
          : false;

      datos.HighPhosphorus =
        Number(phosphorusValue) > 0.3 * phosphorusRDA ? true : false;
    }

    if (datos.Magnesium) {
      datos.SourceMagnesium =
        Number(magnesiumValue) > 0.15 * magnesiumRDA &&
        Number(magnesiumValue) <= 0.3 * magnesiumRDA
          ? true
          : false;

      datos.HighMagnesium =
        Number(magnesiumValue) > 0.3 * magnesiumRDA ? true : false;
    }

    if (datos.Iron) {
      datos.SourceIron =
        Number(ironValue) > 0.15 * ironRDA && Number(ironValue) <= 0.3 * ironRDA
          ? true
          : false;

      datos.HighIron = Number(ironValue) > 0.3 * ironRDA ? true : false;
    }

    if (datos.Zinc) {
      datos.SourceZinc =
        Number(zincValue) > 0.15 * zincRDA && Number(zincValue) <= 0.3 * zincRDA
          ? true
          : false;

      datos.HighZinc = Number(zincValue) > 0.3 * zincRDA ? true : false;
    }

    if (datos.Copper) {
      datos.SourceCopper =
        Number(copperValue) > 0.15 * copperRDA &&
        Number(copperValue) <= 0.3 * copperRDA
          ? true
          : false;

      datos.HighCopper = Number(copperValue) > 0.3 * copperRDA ? true : false;
    }

    if (datos.Manganese) {
      datos.SourceManganese =
        Number(manganeseValue) > 0.15 * manganeseRDA &&
        Number(manganeseValue) <= 0.3 * manganeseRDA
          ? true
          : false;

      datos.HighManganese =
        Number(manganeseValue) > 0.3 * manganeseRDA ? true : false;
    }

    if (datos.Fluorine) {
      datos.SourceFluorine =
        Number(fluorineValue) > 0.15 * fluorineRDA &&
        Number(fluorineValue) <= 0.3 * fluorineRDA
          ? true
          : false;

      datos.HighFluorine =
        Number(fluorineValue) > 0.3 * fluorineRDA ? true : false;
    }

    if (datos.Selenium) {
      datos.SourceSelenium =
        Number(seleniumValue) > 0.15 * seleniumRDA &&
        Number(seleniumValue) <= 0.3 * seleniumRDA
          ? true
          : false;

      datos.HighSelenium =
        Number(seleniumValue) > 0.3 * seleniumRDA ? true : false;
    }

    if (datos.Iodine) {
      datos.SourceSelenium =
        Number(iodineValue) > 0.15 * iodineRDA &&
        Number(iodineValue) <= 0.3 * iodineRDA
          ? true
          : false;

      datos.HighIodine = Number(iodineValue) > 0.3 * iodineRDA ? true : false;
    }

    //CAMBIO DE TIPOS

    datos.FoodGroup =
      typeof datos.FoodGroup === "string"
        ? datos.FoodGroup
        : datos.FoodGroup.value;
    datos.FoodSubgroup =
      typeof datos.FoodSubgroup === "string"
        ? datos.FoodSubgroup
        : datos.FoodSubgroup.value;
    if (datos.Country) {
      datos.Country =
        typeof datos.Country === "string" ? datos.Country : datos.Country.value;
    }

    if (datos.District) {
      datos.District =
        typeof datos.District === "string" ? datos.District : datos.District.value;
    }

    datos.Energy = Number(datos.Energy);
    datos.Energykj = (energyValue * 4.184).toFixed(2);
    datos.TotalCarbohydrates = Number(datos.TotalCarbohydrates);
    datos.TotalLipids = Number(datos.TotalLipids);
    datos.TotalProteins = Number(datos.TotalProteins);
    datos.TotalSugars = Number(datos.TotalSugars);
    datos.SaturatedFattyAcids = Number(datos.SaturatedFattyAcids);

    if (datos.Water) {
      datos.Water = Number(datos.Water);
    }
    if (datos.Fibre) {
      datos.Fibre = Number(datos.Fibre);
    }
    if (datos.MonounsaturatedFattyAcids) {
      datos.MonounsaturatedFattyAcids = Number(datos.MonounsaturatedFattyAcids);
    }
    if (datos.PolyunsaturatedFattyAcids) {
      datos.PolyunsaturatedFattyAcids = Number(datos.PolyunsaturatedFattyAcids);
    }
    if (datos.UnsaturatedFattyAcids) {
      datos.UnsaturatedFattyAcids = Number(datos.UnsaturatedFattyAcids);
    }
    if (datos.TransFattyAcids) {
      datos.TransFattyAcids = Number(datos.TransFattyAcids);
    }

    if (datos.Cholesterol) {
      datos.Cholesterol = Number(datos.Cholesterol);
    }
    if (datos.Ash) {
      datos.Ash = Number(datos.Ash);
    }
    if (datos.A) {
      datos.A = Number(datos.A);
    }
    if (datos.BetaCarotenes) {
      datos.BetaCarotenes = Number(datos.BetaCarotenes);
    }
    if (datos.B1) {
      datos.B1 = Number(datos.B1);
    }
    if (datos.B2) {
      datos.B2 = Number(datos.B2);
    }
    if (datos.B3) {
      datos.B3 = Number(datos.B3);
    }
    if (datos.B5) {
      datos.B5 = Number(datos.B5);
    }
    if (datos.B6) {
      datos.B6 = Number(datos.B6);
    }
    if (datos.B8) {
      datos.B8 = Number(datos.B8);
    }
    if (datos.B9) {
      datos.B9 = Number(datos.B9);
    }
    if (datos.B12) {
      datos.B12 = Number(datos.B12);
    }
    if (datos.C) {
      datos.C = Number(datos.C);
    }
    if (datos.D) {
      datos.D = Number(datos.D);
    }
    if (datos.E) {
      datos.E = Number(datos.E);
    }
    if (datos.K) {
      datos.K = Number(datos.K);
    }
    if (datos.Ethanol) {
      datos.Ethanol = Number(datos.Ethanol);
    }
    if (datos.Sodium) {
      datos.Sodium = Number(datos.Sodium);
    }
    if (datos.Calcium) {
      datos.Calcium = Number(datos.Calcium);
    }
    if (datos.Potassium) {
      datos.Potassium = Number(datos.Potassium);
    }
    if (datos.Phosphorus) {
      datos.Phosphorus = Number(datos.Phosphorus);
    }
    if (datos.Iron) {
      datos.Iron = Number(datos.Iron);
    }
    if (datos.Magnesium) {
      datos.Magnesium = Number(datos.Magnesium);
    }
    if (datos.Zinc) {
      datos.Zinc = Number(datos.Zinc);
    }

    if (datos.Copper) {
      datos.Copper = Number(datos.Copper);
    }
    if (datos.Fluorine) {
      datos.Fluorine = Number(datos.Fluorine);
    }
    if (datos.Iodine) {
      datos.Iodine = Number(datos.Iodine);
    }
    if (datos.Manganese) {
      datos.Manganese = Number(datos.Manganese);
    }
    if (datos.Selenium) {
      datos.Selenium = Number(datos.Selenium);
    }

    if (defaultValue) {
      console.log(defaultValue);
      const foodDocRef = doc(db, "data", defaultValue.id);
      await updateDoc(foodDocRef, datos);
    } else {
      await addDoc(foodsCollectionRefs, datos);
    }

    const getFoods = async () => {
      const data = await getDocs(foodsCollectionRefs);
      console.log(
        "getFoods: ",
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      handleClose();
    };

    getFoods();

    reset({ Name: "" });
    reset({ FoodGroup: "" });
    reset({ FoodSubgroup: "" });
    reset({ Country: "" });
    reset({ Energy: " " });
    reset({ Energykj: " " });
    reset({ Water: " " });
    reset({ TotalProteins: " " });
    reset({ TotalCarbohydrates: " " });
    reset({ TotalSugars: " " });
    reset({ TotalLipids: " " });
    reset({ Fibre: " " });
    reset({ District: " " });
    reset({ SaturatedFattyAcids: " " });
    reset({ MonounsaturatedFattyAcids: " " });
    reset({ PolyunsaturatedFattyAcids: " " });
    reset({ UnsaturatedFattyAcids: " " }); //15
    reset({ TranFattyAcids: " " });
    reset({ Cholesterol: " " });
    reset({ Ash: " " });
    reset({ A: " " });
    reset({ BetaCarotenes: " " });
    reset({ B1: " " });
    reset({ B2: " " });
    reset({ B3: " " });
    reset({ B5: " " });
    reset({ B6: " " });
    reset({ B8: " " });
    reset({ B9: " " });
    reset({ B12: " " });
    reset({ C: " " });
    reset({ D: " " });
    reset({ E: " " });
    reset({ K: " " });
    reset({ Ethanol: " " });
    reset({ Sodium: " " });
    reset({ Calcium: " " });
    reset({ Potassium: " " });
    reset({ Phosphorus: " " });
    reset({ Iron: " " });
    reset({ Magnesium: " " });
    reset({ Zinc: " " });
    reset({ Copper: " " });
    reset({ Fluorine: " " });
    reset({ Iodine: " " });
    reset({ Manganese: " " });
    reset({ Selenium: " " });
    reset({ EdiblePortion: " " });

    reset({ LowEnergy: " " });
    reset({ EnergyFree: " " });
    reset({ LowFat: " " });
    reset({ FatFree: " " });
    reset({ LowSaturatedFat: " " });
    reset({ SaturatedFatFree: " " });
    reset({ LowSugars: " " });
    reset({ SugarsFree: " " });
    reset({ LowSodium: " " });
    reset({ SodiumFree: " " });
    reset({ VeryLowSodium: " " });
    reset({ HighFibre: " " });
    reset({ SourceFibre: " " });
    reset({ SourceProtein: " " });
    reset({ HighProtein: " " });
    reset({ HighMonounsaturatedFat: " " });
    reset({ HighPolyunsaturatedFat: " " });
    reset({ HighUnsaturatedFat: " " });
    reset({ HighMonounsaturatedFat: " " });

    reset({ SourceA: " " });
    reset({ HighA: " " });

    console.log(2, datos);
  };

  const styleDanger = {
    //backgroundColor: "#FFC0A4",
    border: "1px solid #ef8157",
    //color: "#ef8157",
    display: "block",
    width: "100%",
    fontWeight: "400",
    lineHeight: "normal",
    fontSize: "14px",
    boxShadow: "none",
    borderRadius: "4px",
    padding: "0px 0px 0px 0px",
    height: "unset",
    backgroundClip: "paddingBox",
  };

  const nameInput = register("Name", { required: "Required field" });

  const foodgroupInput = register("FoodGroup", {
    required: "Required field",
  });

  const foodsubgroupInput = register("FoodSubgroup", {
    required: "Required field",
  });

  const countryInput = register("Country", { required: false });

  //const [country, setCountry] = useState([])

  const districtInput = register("District", { required: false });

  const energyInput = register("Energy", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: "Required field",
  });

  /*
  const energykjInput = register("Energykj", {
    value: energyValue * 4.184,
  });

  
  useEffect(() => {
    setValue("Light", Number(energyValue) < 10 ? true : false);
    console.log("Hello");
    console.log("A veeer", Number(energyValue) < 10);
  }, [energyValue]);
  */

  const waterInput = register("Water", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const totalproteinsInput = register("TotalProteins", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: "Required field",
  });

  const totalcarbohydratesInput = register("TotalCarbohydrates", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: true,
  });

  const totalsugarsInput = register("TotalSugars", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: "Required field",
  });

  const fibreInput = register("Fibre", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const totallipidsInput = register("TotalLipids", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: "Required field",
  });

  const saturatedfattyacidsInput = register("SaturatedFattyAcids", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: "Required field",
  });

  const monounsaturatedfattyacidsInput = register("MonounsaturatedFattyAcids", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const polyunsaturatedfattyacidsInput = register("PolyunsaturatedFattyAcids", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const unsaturatedfattyacidsInput = register("UnsaturatedFattyAcids", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const transfattyacidsInput = register("TransFattyAcids", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const cholesterolInput = register("Cholesterol", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const ashInput = register("Ash", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const aInput = register("A", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const betacarotenesInput = register("BetaCarotenes", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const b1Input = register("B1", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const b2Input = register("B2", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const b3Input = register("B3", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const b5Input = register("B5", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const b6Input = register("B6", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const b8Input = register("B8", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const b9Input = register("B9", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const b12Input = register("B12", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const cInput = register("C", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const dInput = register("D", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const eInput = register("E", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const kInput = register("K", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const ethanolInput = register("Ethanol", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const sodiumInput = register("Sodium", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const calciumInput = register("Calcium", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const potassiumInput = register("Potassium", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const phosphorusInput = register("Phosphorus", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const ironInput = register("Iron", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const magnesiumInput = register("Magnesium", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const zincInput = register("Zinc", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const copperInput = register("Copper", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const fluorineInput = register("Fluorine", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const iodineInput = register("Iodine", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const manganeseInput = register("Manganese", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const seleniumInput = register("Selenium", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });
  const edibleportionInput = register("EdiblePortion", {
    min: {
      value: 0,
      message: "Only numbers are accepted",
    },
    required: false,
  });

  const [page, setPage] = useState(1);

  function goNextPage() {
    if (page === 4) return;

    setPage((page) => page + 1);

    trigger([
      "Name",
      "FoodGroup",
      "FoodSubgroup",
      "Energy",
      "Energykj",
      "SaturatedFattyAcids",
      "TotalProteins",
      "TotalCarbohydrates",
      "TotalSugars",
      "TotalLipids",
      "Country",
      "District",
      "Water",
      "Fibre",
      "MonounsaturatedFattyAcids",
      "PolyunsaturatedFattyAcids",
      "UnsaturatedFattyAcids",
      "TransFattyAcids",
      "Cholesterol",

      "Ash",
      "A",
      "BetaCarotenes",
      "B1",
      "B2",
      "Ethanol",
      "Sodium",

      "Calcium",
      "Potassium",
      "Phosphorus",
      "B3",
      "B5",
      "B6",
      "B8",
      "B9",
      "Iron",
      "Magnesium",
      "Zinc",
      "Copper",
      "Fluorine",
      "B12",
      "C",
      "D",
      "E",
      "K",
      "Iodine",
      "Manganese",
      "Selenium",
      "EdiblePortion",
    ]);
  }

  function goPrevPage() {
    if (page === 1) return;
    setPage((page) => page - 1);
  }

  //WATCH
  const energyValue = watch("Energy");
  const totalLipidsValue = watch("TotalLipids");
  const saturatedFattyAcidsValue = watch("SaturatedFattyAcids");
  const totalSugarsValue = watch("TotalSugars");
  const sodiumValue = watch("Sodium");
  const fibreValue = watch("Fibre");
  const totalProteinValue = watch("TotalProteins");
  const monounsaturatedFattyAcidsValue = watch("MonounsaturatedFattyAcids");
  const polyunsaturatedFattyAcidsValue = watch("PolyunsaturatedFattyAcids");
  const unsaturatedFattyAcidsValue = watch("UnsaturatedFattyAcids");
  const countryValue = watch("Country");
  console.log("Countrywatch", countryValue);

  const aValue = watch("A");
  const carotenesValue = watch("BetaCarotenes"); 
  const eValue = watch("E");
  const kValue = watch("K");
  const dValue = watch("D");
  const cValue = watch("C");
  const riboflavinValue = watch("B2");
  const niacinValue = watch("B3");
  const b6Value = watch("B6");
  const folicAcidValue = watch("B9");
  const b12Value = watch("B12");
  const biotinValue = watch("B8");
  const pantothenicAcidValue = watch("B5");
  const thiaminValue = watch("B1");
  const potassiumValue = watch("Potassium");
  const calciumValue = watch("Calcium");
  const phosphorusValue = watch("Phosphorus");
  const magnesiumValue = watch("Magnesium");
  const ironValue = watch("Iron");
  const zincValue = watch("Zinc");
  const copperValue = watch("Copper");
  const manganeseValue = watch("Manganese");
  const fluorineValue = watch("Fluorine");
  const seleniumValue = watch("Selenium");
  const iodineValue = watch("Iodine");

  return (
    <form className="form" onSubmit={handleSubmit(addFood, onSubmit)}>
      <CardBody>
        <div>
          {page === 1 && (
            <Pagina1
              defaultValue={defaultValue}
              showInfo={showInfo}
              errors={errors}
              foodsCollectionRefs={foodsCollectionRefs}
              foodgroupSelect={foodgroupSelect}
              control={control}
              styleDanger={styleDanger}
              nameInput={nameInput}
              foodgroupInput={foodgroupInput}
              foodsubgroupInput={foodsubgroupInput}
              foodsubgroupSelect={foodsubgroupSelect}
              countryInput={countryInput}
              //country = {country}
              //setCountry = {setCountry}
              districtInput={districtInput}
              countrySelect={countrySelect}
              waterInput={waterInput}
              fibreInput={fibreInput}
              saturatedfattyacidsInput={saturatedfattyacidsInput}
              monounsaturatedfattyacidsInput={monounsaturatedfattyacidsInput}
              polyunsaturatedfattyacidsInput={polyunsaturatedfattyacidsInput}
              totalproteinsInput={totalproteinsInput}
              totalcarbohydratesInput={totalcarbohydratesInput}
              totalsugarsInput={totalsugarsInput}
              totallipidsInput={totallipidsInput}
              unsaturatedfattyacidsInput={unsaturatedfattyacidsInput}
              transfattyacidsInput={transfattyacidsInput}
              cholesterolInput={cholesterolInput}
              energyInput={energyInput}
              energyValue={energyValue}
            />
          )}

          {page === 2 && (
            <Pagina2
              waterInput={waterInput}
              defaultValue={defaultValue}
              showInfo={showInfo}
              errors={errors}
              foodsCollectionRefs={foodsCollectionRefs}
              ashInput={ashInput}
              aInput={aInput}
              betacarotenesInput={betacarotenesInput}
              b1Input={b1Input}
              b2Input={b2Input}
              ethanolInput={ethanolInput}
              sodiumInput={sodiumInput}
              calciumInput={calciumInput}
              potassiumInput={potassiumInput}
              phosphorusInput={phosphorusInput}
              b3Input={b3Input}
              b5Input={b5Input}
              b6Input={b6Input}
              b8Input={b8Input}
              b9Input={b9Input}
              ironInput={ironInput}
              magnesiumInput={magnesiumInput}
              zincInput={zincInput}
              copperInput={copperInput}
              fluorineInput={fluorineInput}
              b12Input={b12Input}
              cInput={cInput}
              dInput={dInput}
              eInput={eInput}
              kInput={kInput}
              iodineInput={iodineInput}
              manganeseInput={manganeseInput}
              seleniumInput={seleniumInput}
              edibleportionInput={edibleportionInput}
            />
          )}


{/* 
          {page === 3 && (
            <Pagina3
              energyValue={energyValue}
              totalLipidsValue={totalLipidsValue}
              saturatedFattyAcidsValue={saturatedFattyAcidsValue}
              totalSugarsValue={totalSugarsValue}
              sodiumValue={sodiumValue}
              fibreValue={fibreValue}
              totalProteinValue={totalProteinValue}
              monounsaturatedFattyAcidsValue={monounsaturatedFattyAcidsValue}
              polyunsaturatedFattyAcidsValue={polyunsaturatedFattyAcidsValue}
              unsaturatedFattyAcidsValue={unsaturatedFattyAcidsValue}
            />
          )}

          {page === 4 && (
            <Pagina4
              aValue={aValue}
              eValue={eValue}
              kValue={kValue}
              dValue={dValue}
              cValue={cValue}
              riboflavinValue={riboflavinValue}
              niacinValue={niacinValue}
              b6Value={b6Value}
              folicAcidValue={folicAcidValue}
              b12Value={b12Value}
              biotinValue={biotinValue}
              pantothenicAcidValue={pantothenicAcidValue}
              thiaminValue={thiaminValue}
              potassiumValue={potassiumValue}
              calciumValue={calciumValue}
              phosphorusValue={phosphorusValue}
              magnesiumValue={magnesiumValue}
              ironValue={ironValue}
              zincValue={zincValue}
              copperValue={copperValue}
              manganeseValue={manganeseValue}
              fluorineValue={fluorineValue}
              seleniumValue={seleniumValue}
              iodineValue={iodineValue}
              aRDA={aRDA}
              eRDA={eRDA}
              kRDA={kRDA}
              dRDA={dRDA}
              cRDA={cRDA}
              riboflavinRDA={riboflavinRDA}
              niacinRDA={niacinRDA}
              b6RDA={b6RDA}
              folicAcidRDA={folicAcidRDA}
              b12RDA={b12RDA}
              biotinRDA={biotinRDA}
              pantothenicAcidRDA={pantothenicAcidRDA}
              thiaminRDA={thiaminRDA}
              potassiumRDA={potassiumRDA}
              calciumRDA={calciumRDA}
              phosphorusRDA={phosphorusRDA}
              magnesiumRDA={magnesiumRDA}
              ironRDA={ironRDA}
              zincRDA={zincRDA}
              copperRDA={copperRDA}
              manganeseRDA={manganeseRDA}
              fluorineRDA={fluorineRDA}
              seleniumRDA={seleniumRDA}
              iodineRDA={iodineRDA}
            />
          )}
          
        */}


        </div>
      </CardBody>
      <CardFooter>
        <div className="row">
          {" "}
          <div className="form group">
            <Button
              color="danger"
              className="btn-round btn btn-info"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="form group">
              {!showInfo && page === 2 && (
                <Button
                  type="submit"
                  color="info"
                  className="btn-round btn btn-info"
                >
                  ADD
                </Button>
              )}

              {page !== 2 && (
                <Button
                  onClick={goNextPage}
                  type="button"
                  color="info"
                  className="btn-round btn btn-info"
                >
                  NEXT
                </Button>
              )}
            </div>
          </div>
          <div className="col-md-3 ml-auto">
            <div className="form group">

              {page !== 1 && (
              <Button
                onClick={goPrevPage}
                color="default"
                className="btn-round btn btn-default"
              >
                BACK
              </Button>)}
            </div>
          </div>
        </div>
        {(errors.Name ||
          errors.FoodGroup ||
          errors.FoodSubgroup ||
          errors.Energy ||
          errors.Energykj ||
          errors.TotalCarbohydrates ||
          errors.TotalLipids ||
          errors.TotalProteins ||
          errors.TotalSugars) && (
          <label className="error">
            <code>Missing fields to fill</code>
          </label>
        )}
      </CardFooter>
    </form>
  );
}
