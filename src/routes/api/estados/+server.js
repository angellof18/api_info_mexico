import estados from '$lib/data.json'; // Cargar el archivo JSON

export function GET() {
	// Extraer solo la información de los estados
	const estadosList = estados.map((estado) => ({
		EFE_KEY: estado.EFE_KEY,
		ENTIDAD_FEDERATIVA: estado.ENTIDAD_FEDERATIVA,
		ABREVIATURA: estado.ABREVIATURA
	}));

	//	return json(estadosList);

	return new Response(JSON.stringify(estadosList), {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': ''
		}
	});
}
