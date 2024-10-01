// src/routes/+server.js
import { redirect } from '@sveltejs/kit';

export async function GET() {
	// Redirigir a /api/estados
	throw redirect(302, '/api/estados');
}
