import { json } from '@sveltejs/kit';
import estados from '$lib/data.json'; // Cargar el archivo JSON

export function GET() {
	// Extraer solo la información de los estados
	const estadosList = estados.map((estado) => ({
		EFE_KEY: estado.EFE_KEY,
		ENTIDAD_FEDERATIVA: estado.ENTIDAD_FEDERATIVA,
		ABREVIATURA: estado.ABREVIATURA
	}));

	return json(estadosList);
}
