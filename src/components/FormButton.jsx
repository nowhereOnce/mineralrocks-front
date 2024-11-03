import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CustomDialog from "./CustomDialog";

export default function FormButton({ reload }) {
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
            await reload(); // Recargar datos
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
    <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
            Agregar Muestra
        </Button>
        <CustomDialog open={open} handleClose={handleClose} handleSubmit={handleSubmit} />
    </React.Fragment>
    );
}
