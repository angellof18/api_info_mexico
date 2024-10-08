import estados from '$lib/data.json'; // Cargar el archivo JSON

export function GET({ params }) {
	const { id } = params;

	// Convertir el parámetro a número y buscar el estado por EFE_KEY
	const estadoData = estados.find((e) => e.EFE_KEY === parseInt(id));

	if (!estadoData) {
		return new Response('Estado no encontrado', { status: 404 });
	}

	return new Response(JSON.stringify(estadoData), {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	});
}
