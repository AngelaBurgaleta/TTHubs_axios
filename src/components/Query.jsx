import React, { useEffect, useState } from "react";
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
  where,
} from "firebase/firestore";
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
import { setConstantValue } from "typescript";
//https://firebase.google.com/docs/firestore/solutions/aggregation

export default function Query({
  defaultValue,
  foodsCollectionRefs,
  handleClose,
  setFoods,
  showInfo,
}) {
  //QUERYS

  const [beverages, setBeverages] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [snapShot, setSnapshot] = useState(null);
  //const [messages, setMessages] = useState(null);

  useEffect(() => {
    const q = query(foodsCollectionRefs, where("TotalLipids", ">", 0.5));

    onSnapshot(q, (snapshot) => {
      const items = [];

      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });

      setBeverages(items);
    });

    //console.log("Current cities in CA: ", cities.join(", "));
    //console.log("Current beverages in CA: ", cities);
  }, []);

  console.log("Lista bebidas: ", beverages);

  return (
    <Card id="cards">
      <CardBody>
        <Table striped>
          <thead className="text-success">
            <tr>
              <th>Name</th>
              <th>Food Group</th>
              <th>Food Subgroup</th>
              <th>Country</th>
              <th>Energy(Kcal/100g)</th>
            </tr>
          </thead>
          <tbody>
            {beverages.map((food) => (
              <tr key={food.id}>
                <th>{food.Name}</th>
                <th>{food.FoodGroup}</th>
                <th>{food.FoodSubgroup}</th>
                <th>{food.Country}</th>
                <th>{food.Energy}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}
