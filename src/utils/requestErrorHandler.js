
export const handleRequestError = (error) => {

    if (error.response) {
        // Error de respuesta del servidor 
        console.error("Error en la solicitud:", error.response.status);
        console.error("Datos del error:", error.response.data);

        if (error.response.status === 401) {
            alert("La sesión expiró. Por favor inicie sesión para continuar");
            localStorage.removeItem('token');
            window.location.reload();
        } else if (error.response.status === 403) {
            alert("No tiene permisos para realizar esta acción");
            window.location.reload();
        }
    } else if (error.request) {
        // La solicitud fue hecha, pero no hubo respuesta
        console.error("Sin respuesta del servidor:", error.request);
        alert("No se pudo conectar con el servidor. Intenta más tarde.");
        window.location.reload();
    }
    else {
        // Algo salió mal al configurar la solicitud
        console.error("Error al configurar la solicitud:", error.message);
        alert("Ocurrió un error inesperado. Intenta más tarde.");
    }
    
};