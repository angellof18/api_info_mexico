import estados from '$lib/data.json'; // Cargar el archivo JSON

export function GET({ params }) {
	const { id } = params;

	// Convertir el parámetro a número y buscar el estado por EFE_KEY
	const estadoData = estados.find((e) => e.EFE_KEY === parseInt(id));

	if (!estadoData) {
		return new Response('Estado no encontrado', { status: 404 });
	}

	// Extraer solo los municipios
	const municipiosList = estadoData.MUNICIPIOS.map((municipio) => ({
		MUN_KEY: municipio.MUN_KEY,
		MUNICIPIO: municipio.MUNICIPIO
	}));

	return new Response(JSON.stringify(municipiosList), {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	});
}
