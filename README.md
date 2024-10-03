# API de Entidades Federativas de México

Esta es una API desarrollada con [SvelteKit](https://kit.svelte.dev/) que proporciona información sobre las entidades federativas de México, sus municipios y localidades, organizada en formato JSON.

## Instalacón
1. Clona repositorio:
   ```bash
   git clone https://github.com/angellof18/api_info_mexico.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd api_info_mexico
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
## Uso
Después de seguir los pasos de instalación, puedes acceder a la API en `http://localhost:5173`.

## Endpoints Disponibles

### 1. Listar todas las entidades federativas
**GET** `/api/estados`

Devuelve una lista de todas las entidades federativas.

**Ejemplo de respuesta**:
```json
[
    {
        "EFE_KEY": 28,
        "ENTIDAD_FEDERATIVA": "Tamaulipas",
        "ABREVIATURA": "TS"
    },
    {
        "EFE_KEY": 2,
        "ENTIDAD_FEDERATIVA": "Baja California",
        "ABREVIATURA": "BC"
    }
]
```


### 2. Obtener información de una entidad federativa por ID
**GET** `/api/estados/{id}`


Devuelve los detalles de una entidad federativa específica.

- **Parámetro**:
  - `id`: Identificador único de la entidad federativa (`EFE_KEY`).

**Ejemplo de solicitud**:
```bash
GET /api/estados/28
```


**Ejemplo de respuesta**:
```json
{
    "EFE_KEY": 28,
    "ENTIDAD_FEDERATIVA": "Tamaulipas",
    "ABREVIATURA": "TS",
    "MUNICIPIOS": [
        {
            "MUN_KEY": 3,
            "MUNICIPIO": "Altamira",
            "LOCALIDADES": [
                {
                    "LOCAL_KEY": 3,
                    "LOCALIDAD": "Agua de castilla"
                }
            ]
        }
    ]
}

```

### 3. Listar los municipios de una entidad federativa
**GET** `/api/estados/{id}/municipios`

Devuelve una lista de los municipios de la entidad federativa.

- **Parámetro**:
  - `id`: Identificador único de la entidad federativa (`EFE_KEY`).



**Ejemplo de solicitud**:
```bash
GET /api/estados/28/municipios
```


**Ejemplo de respuesta**:
```json
[
    {
        "MUN_KEY": 3,
        "MUNICIPIO": "Altamira"
    },
    {
        "MUN_KEY": 4,
        "MUNICIPIO": "Ciudad Madero"
    }
]
```

### 4. Listar las localidades de un municipio
**GET** `/api/estados/{id}/municipios/{municipioId}/localidades`

Devuelve una lista de las localidades de un municipio específico dentro de una entidad federativa.

- **Parámetro**:
  - `id`: Identificador único de la entidad federativa (`EFE_KEY`).
  - `municipioId`: Identificador único del municipio (`MUN_KEY`).


**Ejemplo de solicitud**:
```bash
GET /api/estados/28/municipios/3/localidades
```


**Ejemplo de respuesta**:
```json
[
    {
        "LOCAL_KEY": 3,
        "LOCALIDAD": "Agua de castilla"
    }
]
```

