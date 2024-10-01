// src/routes/api/estados/+server.js
import fs from 'fs';
import path from 'path';

export async function GET() {
    const dataPath = path.resolve('src/lib/data'); // Ajusta la ruta según donde almacenes tus JSON
    const files = fs.readdirSync(dataPath);
    const estados = files.map(file => {
        const estado = file.replace('.json', '').replace(/_/g, ' '); // Reemplaza guiones bajos por espacios
        return {
            estado: estado,
            url: `/api/estados/${estado.replace(/ /g, '_')}` // Reemplaza espacios por guiones bajos en la URL
        };
    });

    return new Response(JSON.stringify({ estados }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
