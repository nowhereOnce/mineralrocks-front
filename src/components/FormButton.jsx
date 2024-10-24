import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";


export default function Form() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //handleSubmit: Makes a POST request to the API to create a new rock in the DB.
    const handleSubmit = async (formJson) => {
        try {
            const response = await axios.post("http://localhost:8000/samples/", formJson, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Registro exitoso:", response.data);
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
    <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
            Agregar Muestra
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: "form",
                onSubmit: async (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const name = formJson.name;
                    const description = formData.description;
                    console.log(formJson);
                    await handleSubmit(formJson); // Calls the function to make the POST req
                    handleClose();
                },
            }}
        >
            <DialogTitle>Agregar roca</DialogTitle>
            <DialogContent>
                {/* <DialogContentText>
                    Por favor, ingrese los datos correspondientes con la muestra que desea agregar.
                </DialogContentText> */}

                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="rock_name"
                    name="rock_name"
                    label="Nombre de la roca"
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    // required //description is not always required
                    margin="dense"
                    id="description"
                    name="description"
                    label="Descripción de la roca"
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    required 
                    margin="dense"
                    id="location_name"
                    name="location_name"
                    label="Localidad"
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    required 
                    margin="dense"
                    id="location_country"
                    name="location_country"
                    label="País"
                    type="text"
                    fullWidth
                    variant="standard"
                />

                <br />
                {/* Campo para "Corte" */}
                <FormControl component="fieldset" margin="dense">
                    <FormLabel component="legend">Corte</FormLabel>
                    <RadioGroup
                        row
                        aria-label="cut"
                        name="cut"
                        defaultValue={false}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Sí" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                <br></br>
                {/* Campo para "Sección fina" */}
                <FormControl component="fieldset" margin="dense">
                    <FormLabel component="legend">Sección fina</FormLabel>
                    <RadioGroup
                        row
                        aria-label="thin_section"
                        name="thin_section"
                        defaultValue={false}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Sí" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    //required 
                    margin="dense"
                    id="picture"
                    name="picture"
                    label="URL de la imágen"
                    type="text"
                    fullWidth
                    variant="standard"
                />

            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button type="submit">Aceptar</Button>
            </DialogActions>

        </Dialog>
    </React.Fragment>
    );
}
