import { json } from '@sveltejs/kit';
import estados from '$lib/data.json'; // Cargar el archivo JSON

export function GET({ params }) {
    const { estado, municipio } = params;

    // Buscar el estado por su nombre
    const estadoData = estados.find(e => e.ENTIDAD_FEDERATIVA.toLowerCase() === estado.toLowerCase());

    if (!estadoData) {
        return new Response('Estado no encontrado', { status: 404 });
    }

    // Buscar el municipio por su nombre
    const municipioData = estadoData.MUNICIPIOS.find(m => m.MUNICIPIO.toLowerCase() === municipio.toLowerCase());

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
