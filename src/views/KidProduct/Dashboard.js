import React from "react";
//dialog
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// Button
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
//icon
import AddItem from "@material-ui/icons/Add";
// core components
import GridItem from "../../components/admin/Grid/GridItem";
import GridContainer from "../../components/admin/Grid/GridContainer.js";
import Table from "../../components/admin/Table/Table.js";
import Card from "../../components/admin/Card/Card.js";
import CardHeader from "../../components/admin/Card/CardHeader.js";
import CardBody from "../../components/admin/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function KidProduct() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <Box>
              <h4 className={classes.cardTitleWhite}>Add Item</h4>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                name="addItem"
              >
                <AddItem>Add</AddItem>
              </Button>
            </Box>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "ID",
                "Name",
                "Category",
                "Image",
                "Maker",
                "Price",
                "Discount",
                "Function",
                ""
              ]}
              tableData={[
                [
                  "Dakota Rice",
                  "Niger",
                  "Oud-Turnhout",
                  "$36,738",
                  "",
                  "$78,615",
                  "",
                  (() => (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      Edit
                    </Button>
                  ))(),
                  (() => (
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  ))()
                ],
                [
                  "Minerva Hooper",
                  "Curaçao",
                  "Sinaai-Waas",
                  "$23,789",
                  "",
                  "$78,615",
                  "",
                  (() => (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      Edit
                    </Button>
                  ))(),
                  (() => (
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  ))()
                ],
                [
                  "Sage Rodriguez",
                  "Netherlands",
                  "Baileux",
                  "$56,142",
                  "",
                  "$78,615",
                  "",
                  (() => (
                    <Button variant="outlined" color="primary">
                      Edit
                    </Button>
                  ))(),
                  (() => (
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  ))()
                ],
                [
                  "Philip Chaney",
                  "Korea, South",
                  "Overland Park",
                  "$38,735",
                  "",
                  "$78,615",
                  "",
                  (() => (
                    <Button variant="outlined" color="primary">
                      Edit
                    </Button>
                  ))(),
                  (() => (
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  ))()
                ],
                [
                  "Doris Greene",
                  "Malawi",
                  "Feldkirchen in Kärnten",
                  "$63,542",
                  "",
                  "$78,615",
                  "",
                  (() => (
                    <Button variant="outlined" color="primary">
                      Edit
                    </Button>
                  ))(),
                  (() => (
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  ))()
                ],
                [
                  "Mason Porter",
                  "Chile",
                  "Gloucester",
                  "$78,615",
                  "",
                  "$78,615",
                  "",
                  (() => (
                    <Button variant="outlined" color="primary">
                      Edit
                    </Button>
                  ))(),
                  (() => (
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
                  ))()
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      {/** dialog add edit */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            a
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="img"
            label="Image"
            type="file"
            fullWidth
          />
          <TextField
            margin="dense"
            id="maker"
            label="Maker"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="pice"
            label="Pice"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="discount"
            label="Discount"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" type="submit">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </GridContainer>
  );
}
// import React from "react";
// import MaterialTable from "material-table";

// export default function MaterialTableDemo() {
//   const [state, setState] = React.useState({
//     columns: [
//       { title: "ID", field: "id" },
//       { title: "Name", field: "name" },
//       { title: "Category", field: "category" },
//       { title: "Image", type: "file" },
//       { title: "Maker", field: "maker" },
//       { title: "Price", field: "price" },
//       { title: "Discount", field: "discount" }
//     ],
//     data: [
//       {
//         id: "1",
//         name: "Baran",
//         category: "shirt",
//         image: "",
//         maker: "Nike",
//         price: "$123",
//         discount: "$122"
//       }
//     ]
//   });

//   return (
//     <MaterialTable
//       title="Editable Example"
//       columns={state.columns}
//       data={state.data}
//       editable={{
//         onRowAdd: newData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.push(newData);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           }),
//         onRowUpdate: (newData, oldData) =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               if (oldData) {
//                 setState(prevState => {
//                   const data = [...prevState.data];
//                   data[data.indexOf(oldData)] = newData;
//                   return { ...prevState, data };
//                 });
//               }
//             }, 600);
//           }),
//         onRowDelete: oldData =>
//           new Promise(resolve => {
//             setTimeout(() => {
//               resolve();
//               setState(prevState => {
//                 const data = [...prevState.data];
//                 data.splice(data.indexOf(oldData), 1);
//                 return { ...prevState, data };
//               });
//             }, 600);
//           })
//       }}
//     />
//   );
// }
