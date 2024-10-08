import estados from '$lib/data.json';

export function GET({ params }) {
	const { id, municipioId, localId } = params;

	// Buscar el estado por ID
	const estadoData = estados.find((e) => e.EFE_KEY === parseInt(id));

	if (!estadoData) {
		return new Response('Estado no encontrado', { status: 404 });
	}

	// Obtener los municipios del estado
	const municipios = estadoData.MUNICIPIOS;

	if (municipios.length === 0) {
		return new Response('No hay municipios disponibles para este estado', { status: 404 });
	}

	// Buscar el municipio por ID
	const municipio = municipios.find((m) => m.MUN_KEY === parseInt(municipioId));

	if (!municipio) {
		return new Response('Municipio no encontrado', { status: 404 });
	}

	// Obtener las localidades del municipio
	const localidades = municipio.LOCALIDADES;

	if (!localidades || localidades.length === 0) {
		return new Response('No hay localidades disponibles para este municipio', { status: 404 });
	}

	// Buscar la localidad por ID
	const localidad = localidades.find((l) => l.LOCAL_KEY === parseInt(localId));

	if (!localidad) {
		return new Response('Localidad no encontrada', { status: 404 });
	}

	// Devolver la localidad encontrada
	const responseData = {
		LOCAL_KEY: localidad.LOCAL_KEY,
		LOCALIDAD: localidad.LOCALIDAD
	};

	return new Response(JSON.stringify(responseData), {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	});
}
