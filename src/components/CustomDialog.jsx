import React from "react";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import FormContent from "./FormContent";


const CustomDialog = ({ open, handleClose, handleSubmit, handleUpdate, defaultValues, row }) => {
    const isUpdate = !!row; // Determine if it's an update based on the presence of `row`

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: "form",
                onSubmit: async (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    console.log(formJson);
                    if (isUpdate) {
                        await handleUpdate(formJson); // Calls the function to make the PUT request
                    } else {
                        await handleSubmit(formJson); // Calls the function to make the POST request
                    }
                    handleClose();
                },
            }}
        >
            <DialogTitle>{isUpdate ? "Actualizar roca" : "Agregar roca"}</DialogTitle>

            <FormContent defaultValues={defaultValues} row={row} />

            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button type="submit">Aceptar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CustomDialog;