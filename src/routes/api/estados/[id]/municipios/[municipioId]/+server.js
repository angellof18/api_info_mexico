import estados from '$lib/data.json';

export function GET({ params }) {
	const { id, municipioId } = params;

	const estadoData = estados.find((e) => e.EFE_KEY === parseInt(id));

	if (!estadoData) {
		return new Response('Estado no encontrado', { status: 404 });
	}

	const municipios = estadoData.MUNICIPIOS;

	if (municipios.length === 0) {
		return new Response('No hay municipios disponibles para este estado', { status: 404 });
	}

	const municipio = municipios.find((m) => m.MUN_KEY === parseInt(municipioId));

	if (!municipio) {
		return new Response('Municipio no encontrado', { status: 404 });
	}

	const responseData = {
		MUN_KEY: municipio.MUN_KEY,
		MUNICIPIO: municipio.MUNICIPIO
	};

	return new Response(JSON.stringify(responseData), {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	});
}
