import React, { useState, useEffect } from "react";

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
  startAt,
  limit,
  startAfter,
  query,
  where,
  getDoc,
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
import MyForm from "./MyForm";
import Query from "./Query";
import InfoFood from "./InfoFood";
import { async } from "@firebase/util";


export function FoodTable() {
  //Declarar e inicializar lista de foods
  const [foods, setFoods] = useState([]);

  //Referencia a la db
  const foodsCollectionRefs = collection(db, "data");


  //ORDENAR ALFABÉTICAMENTE
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...foods].sort((a, b) =>
        a[col]?.toLowerCase() > b[col]?.toLowerCase() ? 1 : -1
      );
      setFoods(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...foods].sort((a, b) =>
        a[col]?.toLowerCase() < b[col]?.toLowerCase() ? 1 : -1
      );
      setFoods(sorted);
      setOrder("ASC");
    }
  };

  //FILTRAR POR NOMBRE
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //PAGINACION



  const [lastVisible, setLastVisible] = useState({});
  const [firstVisible, setFirstVisible] = useState({});
  //Para que la vista se renderice a la tabla de foods
  useEffect(() => {
    const first = query(foodsCollectionRefs, orderBy("Name"), limit(3));
    const getFoods = async () => {
      const data = await getDocs(first);
      const lastVisible = data.docs[data.docs.length - 1];
      const firstVisible = data.docs[0]
      setLastVisible(lastVisible)
      setFirstVisible(firstVisible)


      setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(
        setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );

    };

    getFoods();
    



  }, []);

  /*
   useEffect(() => {
     const FirstVisible2 = foods[0].Name
     console.log("firstvisible Use effect", FirstVisible2)
     console.log("firstvisible Use effect2", foods[0])
     setFirstVisible(FirstVisible2)
   }, [foods])
   */


  const handleNext = () => {


    const getNext = async () => {
      const next = query(foodsCollectionRefs,
        orderBy("Name"),
        startAfter(lastVisible),
        limit(3));

      const data = await getDocs(next);
      const lastVisible2 = data.docs[data.docs.length - 1];
      
      setLastVisible(lastVisible2)
     
      setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    }
    getNext();
    const FirstVisblenext = foods[0].Name
    setFirstVisible(FirstVisblenext)
    
  }

  const handleBack = () => {
    const getBack = async () => {
      const back = query(foodsCollectionRefs,
        orderBy("Name"),
        startAt(firstVisible),
        limit(3));

      const data = await getDocs(back);
      const lastVisible2 = data.docs[data.docs.length - 1];
      const firstVisible2 = data.docs[data.docs.length - 3]
      setLastVisible(lastVisible2)
      setFirstVisible(firstVisible2)
      setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    }
    getBack();


  }







  //-------------------------------------------------

  //ELIMINAR---------------------------

  const deleteFood = async (food) => {
    await deleteDoc(doc(db, "data", food.id));

    const getFoods = async () => {
      const data = await getDocs(foodsCollectionRefs);

      console.log(data);
      setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFoods();
  };

  //---------------------------------------

  //UPDATE----------------------
  //abrir y cerrar el modal de actualizar alimento

  const [openFood, setOpenFood] = useState("");

  const openUpdateModal = async (food) => {
    console.log(food.Country);

    setShow(true);

    setOpenFood(food);
  };

  //READ ----------------
  //modal de leer alimento
  const [showInfo, setShowInfo] = useState(false);

  const openInfoModal = async (food) => {
    //setShow(true);

    setShowInfo(true);

    setOpenFood(food);
  };

  const handleCloseInfo = () => {
    setShowInfo(false)
  };
  //---------------------

  //MODAL
  //Abrir y cerrar el modal de añadir/actualizar alimento

  const [show, setShow] = useState(false); //solo add

  const handleClose = () => {
    setShow(false);
    setShowInfo(false);
    setOpenFood(undefined);
  };

  const handleShow = (event) => {
    event.preventDefault();
    setShow(true);
  };



  return (
    <>
      <html className="nav-open">
        <body className="perfect-scrollbar-on">
          <div className="main-panel ps ps--active-y">
            <Navbar expand="lg" className="navbar-absolute fixed-top">
              <div className="container-fluid">
                <div className="navbar-wrapper">
                  <div className="row">
                    <Button
                      className="btn-round btn-icon btn"
                      color="success"
                      onClick={handleShow}
                      style={{ position: "fixed", bottom: "5%", right: "40%" }}
                    >
                      <i className="nc-icon nc-simple-add"></i>
                    </Button>
                    <div className="navbar-brand">Nutritional Profile </div>
                  </div>
                </div>

                {/* <div className="justify-content-end collapse navbar-collapse">
                  <button className="btn-round btn btn-warning btn-sm">
                    Light
                  </button>
                  <button className="btn-round btn btn-warning btn-sm">
                    Gluten free
                  </button>
                </div>*/}
              </div>
            </Navbar>

            <div className="content">
              <Row>
                <Col md="12">
                  <form>
                    <InputGroup className="no-border">
                      <Input
                        id="search"
                        type="text"
                        placeholder="Search by name..."
                        onChange={handleSearch}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="nc-icon nc-zoom-split" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </form>
                  <Card id="cards">
                    <CardBody>
                      <Table striped>
                        <thead className="text-success">
                          <tr>
                            <th
                              className="rt-th rt-resizable-header -cursor-pointer -sort-asc"
                              title="Toggle SortBy"
                              onClick={() => sorting("Name")}
                            >
                              <div
                                className="rt-resizable-header-content::after"
                                caret
                              >
                                Name
                              </div>
                            </th>

                            <th>Food Group</th>
                            <th>Food Subgroup</th>
                            <th>Country</th>
                            <th>Energy(Kcal/100g)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {foods
                            .filter((val) => {
                              if (search === "") {
                                return val;
                              } else if (
                                val.Name?.toLowerCase().includes(
                                  search.toLowerCase()
                                )
                              ) {
                                return val;
                              }
                            })

                            .map((food) => (
                              <tr key={food.id}>
                                <th>{food.Name}</th>
                                <th>{food.FoodGroup}</th>
                                <th>{food.FoodSubgroup}</th>
                                <th>{food.Country}</th>
                                <th>{food.Energy}</th>

                                <div className="card-body">
                                  <Button
                                    className="btn-icon btn-link edit btn btn-danger btn-sm"
                                    onClick={() => deleteFood(food)}
                                  >
                                    <i className="fa fa-times"></i>
                                  </Button>

                                  <Button
                                    className="btn-icon btn-link edit btn btn-info btn-sm"
                                    onClick={() => openUpdateModal(food)}
                                  >
                                    <i className="fa fa-edit"></i>
                                  </Button>
                                  <Button
                                    className="btn-icon btn-link edit btn btn btn-sm"
                                    onClick={() => openInfoModal(food)}
                                  >
                                    <i className="nc-icon nc-alert-circle-i"></i>
                                  </Button>
                                </div>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </CardBody>

                    <CardFooter>
                      <nav className aral-label="pagination">
                        <div className="row">
                          <div className="col-sm-5"></div>
                          <div className="col-sm-4">
                            <ul className="pagination text-center">
                              <li className="page-item">
                                <a arial-label="Previous" className="page-link">
                                  <span aria-hidden="true" color="success">
                                    <button
                                      onClick={handleBack}
                                      aria-hidden="true"
                                      className="fa fa-angle-double-left"
                                    ></button>
                                  </span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a href="#pablo" className="page-link">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a href="#pablo" className="page-link">
                                  2
                                </a>
                              </li>
                              <li className="page-item" color="success">
                                <a href="#pablo" className="page-link">
                                  3
                                </a>
                              </li>

                              <li className="page-item">
                                <a arial-label="Next" className="page-link">
                                  <span aria-hidden="true">
                                    <button
                                      onClick={handleNext}
                                      aria-hidden="true"
                                      className="fa fa-angle-double-right"
                                    ></button>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                    </CardFooter>
                  </Card>

                  <Modal
                    isOpen={show}
                    style={{ maxWidth: "100%", width: "90%" }}
                  >
                    <ModalHeader>
                      {openFood ? "Edit" : "Create"} food
                    </ModalHeader>

                    <ModalBody>
                      <MyForm
                        defaultValue={openFood}
                        foodsCollectionRefs={foodsCollectionRefs}
                        handleClose={handleClose}
                        setFoods={setFoods}
                        showInfo={showInfo}
                      />
                    </ModalBody>
                  </Modal>

                  <Modal
                    isOpen={showInfo}
                    style={{ maxWidth: "100%", width: "75%" }}
                  >

                    <ModalBody>
                      <InfoFood
                        defaultValue={openFood}
                        foodsCollectionRefs={foodsCollectionRefs}
                        handleCloseInfo={handleCloseInfo}
                        foods={foods}
                        setFoods={setFoods}
                        showInfo={showInfo}
                      />
                    </ModalBody>
                  </Modal>
                  {/* 
                  <div>
                    <InfoFood
                      defaultValue={openFood}
                      foodsCollectionRefs={foodsCollectionRefs}
                      handleClose={handleClose}
                      setFoods={setFoods}
                      showInfo={showInfo}
                    />
                  </div>*/}
                </Col>
              </Row>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
