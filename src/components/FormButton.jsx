import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import FormContent from "./FormContent"


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

            {/* Form Component to Create or update a register */}
            <FormContent></FormContent>

        </Dialog>
    </React.Fragment>
    );
}
