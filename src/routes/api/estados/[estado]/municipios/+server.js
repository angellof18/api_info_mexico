// src/routes/api/estados/[estado]/municipios/+server.js
import fs from 'fs';
import path from 'path';

export async function GET({ params }) {
    const estado = params.estado.replace(/_/g, ' '); // Reemplazar guiones bajos por espacios
    const filePath = path.resolve('src/lib/data', `${estado}.json`);

    if (!fs.existsSync(filePath)) {
        return new Response(JSON.stringify({ error: 'Estado no encontrado' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Leer y parsear el archivo JSON
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Asegurarse de que el archivo contiene la estructura correcta
    if (!data || !data.datos || !Array.isArray(data.datos)) {
        return new Response(JSON.stringify({ error: 'Datos no válidos en el archivo JSON' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Extraer municipios únicos
    const municipios = data.datos.map(item => item.municipio);
    const uniqueMunicipios = Array.from(new Set(municipios)); // Filtrar municipios únicos

    return new Response(JSON.stringify(uniqueMunicipios), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
