// src/routes/api/estados/[estado]/+server.js
import fs from 'fs';
import path from 'path';

export async function GET({ params }) {
    const estado = params.estado.replace(/_/g, ' '); // Reemplaza guiones bajos por espacios
    const filePath = path.resolve('src/lib/data', `${estado}.json`);

    if (!fs.existsSync(filePath)) {
        return new Response(JSON.stringify({ error: 'Estado no encontrado' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
