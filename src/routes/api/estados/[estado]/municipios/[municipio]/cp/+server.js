import fs from 'fs';
import path from 'path';

export async function GET({ params }) {
    const estado = params.estado.replace(/_/g, ' ');
    const municipio = params.municipio.replace(/_/g, ' ');
    const filePath = path.resolve('src/lib/data', `${estado}.json`);

    if (!fs.existsSync(filePath)) {
        return new Response(JSON.stringify({ error: 'Estado no encontrado' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Leer y parsear el archivo JSON
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Buscar el municipio en los datos del estado
    const municipioData = data.datos.find(item => item.municipio === municipio);

    if (!municipioData) {
        return new Response(JSON.stringify({ error: 'Municipio no encontrado' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Extraer los códigos postales
    const codigosPostales = municipioData.codigos_postales.map(cp => cp.cp);

    return new Response(JSON.stringify(codigosPostales), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
