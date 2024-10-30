// RockForm.js
import React from "react";
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, DialogContent, DialogActions, Button } from "@mui/material";

const RockForm = ({ handleSubmit, handleClose }) => (
    <>
        <DialogContent>
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
    </>
);

export default RockForm;
