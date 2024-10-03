import { json } from '@sveltejs/kit';
import estados from '$lib/data.json'; // Cargar el archivo JSON

export function GET({ params }) {
    const { id, municipioId } = params;

    // Convertir el parámetro a número y buscar el estado por EFE_KEY
    const estadoData = estados.find(e => e.EFE_KEY === parseInt(id));

    if (!estadoData) {
        return new Response('Estado no encontrado', { status: 404 });
    }

    // Buscar el municipio por MUN_KEY
    const municipioData = estadoData.MUNICIPIOS.find(m => m.MUN_KEY === parseInt(municipioId));

    if (!municipioData) {
        return new Response('Municipio no encontrado', { status: 404 });
    }

    // Extraer solo las localidades
    const localidadesList = municipioData.LOCALIDADES.map((localidad) => ({
        LOCAL_KEY: localidad.LOCAL_KEY,
        LOCALIDAD: localidad.LOCALIDAD
    }));

    return json(localidadesList);
}
