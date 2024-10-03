import { json } from '@sveltejs/kit';
import estados from '$lib/data.json'; // Cargar el archivo JSON

export function GET({ params }) {
    const { estado } = params;
    
    // Buscar el estado por su nombre
    const estadoData = estados.find(e => e.ENTIDAD_FEDERATIVA.toLowerCase() === estado.toLowerCase());

    if (!estadoData) {
        return new Response('Estado no encontrado', { status: 404 });
    }

    return json(estadoData);
}
