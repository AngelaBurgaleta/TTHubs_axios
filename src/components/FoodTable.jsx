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
  query,
  where,
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
//import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export function FoodTable() {
  //Declarar e inicializar lista de foods
  const [foods, setFoods] = useState([]);

  //Referencia a la db
  const foodsCollectionRefs = collection(db, "data");
 //PAGINACION
  /*
  db.collection('data').onSnapshot((snapshot)) => {
    cargarDocumentos(sapshot.docs)
    
  }
  
  //PAGINACION
  const cargarDocumentos = (foods) => {

    if(foods.length>0) {

      documetos.forEach(food => )
  
}
    
  }

 
  const btnNext = document.createElement('button');
  btn.innerText = 'Next Page';
  document.body.append(btn)
  let lastDocument: any = null;
  btnNext.addEventListener('click', () => {
    const query = foodsCollectionRefs
    .orderBy('Nombre')
    .startAfter(lastDocument)
    query.limit(2).get().then( snap => {
      lastDocument = snap.docs[snap.docs.length -1] ||
      retornaDocumentos(snap)
    })
  })
  btn.addEventListener('click', () => {
    console.log('click')
  })
  ------------------------------
  
  const botonSiguiente = document.getElementById('botonSiguiente')
  const botonAnterior = document.getElementById('botonAnterior')
  const contenedorCards = document.getElementById('cards')
  //Evento cada vez que cambia un valor de la bbdd
  //snapshot es comom la captura
  db.collection('data').onSnapshot((snapshot) =>
  //console.log(snapshot.docs[0].data())
  cargarDocumentos(snapshot.docs)
})
//por cada usuario queremos agregar una card (?)
const cargarDocumentos = () => {
  if(cargarDocumentos.length > 0) {
    cargarDocumentos.forEach(documento => {
      contenedorCards.innerHTML += `
      
      `;
    })
  }
}
*/

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

  //Para que la vista se renderice a la tabla de foods

  useEffect(() => {
    const getFoods = async () => {
      const data = await getDocs(foodsCollectionRefs);

      console.log(data);
      setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(
        setFoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    };

    getFoods();
  }, []);

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
                    isOpen = {showInfo}
                    style={{ maxWidth: "100%", width: "75%" }}
                  >
                  
                    <ModalBody>
                      <InfoFood
                        defaultValue={openFood}
                        foodsCollectionRefs={foodsCollectionRefs}
                        handleCloseInfo={handleCloseInfo}
                        foods = {foods}
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
