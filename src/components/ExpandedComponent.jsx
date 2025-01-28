import React from "react";
import { Typography } from "@mui/material";

const ExpandedComponent = ({ data }) => {
    return (
        <div className="expanded-component">
            <div className="expanded-component-info">
                
                <Typography component="span" >
                    <Typography component="span" fontWeight="bold">Nombre: </Typography> 
                    {data.rock_name}
                </Typography>

                {/* Only if data.description exists */}
                {data.description && (
                    <Typography component="span" >
                        <Typography component="span" fontWeight="bold">Descripción: </Typography> 
                        {data.description}
                    </Typography>
                )}
                
                <Typography component="span" >
                    <Typography component="span" fontWeight="bold">Localidad: </Typography>
                    {data.location_name}
                </Typography>

                <Typography component="span" >
                    <Typography component="span" fontWeight="bold">País: </Typography> 
                    {data.location_country}
                </Typography>

                <Typography component="span" >
                    <Typography component="span" fontWeight="bold">Corte: </Typography> 
                    {data.cut ? "Si" : "No"}
                </Typography>

                <Typography component="span" >
                    <Typography component="span" fontWeight="bold">Lámina delgada: </Typography> 
                    {data.thin_section ? "Si" : "No"}
                </Typography>

            </div> 

            {data.picture ? (
                <div className="expanded-component-info">
                    <img src={data.picture} alt={data.rock_name} style={{objectFit: 'cover' , maxWidth: '250px', maxHeight: '250px'}} />
                </div>
                ): 
                <Typography component="span"  className="expanded-component-info">Sin muestra</Typography>
            }
            
            
        </div>
    );
};

export default ExpandedComponent;