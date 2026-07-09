<?php
/**
 * Plugin Name: Sinfónica Carabobo - Tipos de contenido
 * Description: Registra los custom post types y campos ACF que consume el sitio Astro (Videos, Eventos, Álbumes, Audiciones).
 * Nota: "Músicos" NO está aquí a propósito — esa sección la mantiene
 * Ricardo en su propio WordPress local, con su propia configuración.
 *
 * Cómo instalar:
 * 1. Copia este archivo dentro de wp-content/mu-plugins/ de tu WordPress local
 *    (crea la carpeta "mu-plugins" si no existe, junto a wp-content/plugins).
 * 2. No hace falta activarlo: los "mu-plugins" (must-use) se cargan solos.
 * 3. Requiere el plugin "Advanced Custom Fields" activo (no hace falta ACF PRO).
 * 4. Luego de instalarlo, entra a Ajustes > Enlaces permanentes y solo dale
 *    "Guardar cambios" una vez (esto refresca las URLs de los nuevos tipos de contenido).
 */

if (!defined('ABSPATH')) {
    exit;
}

// ---------------------------------------------------------------------------
// 1. CUSTOM POST TYPES
// ---------------------------------------------------------------------------

add_action('init', function () {
    register_post_type('video', [
        'label' => 'Videos',
        'labels' => [
            'name' => 'Videos',
            'singular_name' => 'Video',
            'add_new_item' => 'Añadir nuevo video',
        ],
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'video',
        'has_archive' => true,
        'menu_icon' => 'dashicons-video-alt3',
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'],
        'taxonomies' => ['category'],
    ]);

    register_post_type('evento', [
        'label' => 'Eventos',
        'labels' => [
            'name' => 'Eventos',
            'singular_name' => 'Evento',
            'add_new_item' => 'Añadir nuevo evento',
        ],
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'evento',
        'has_archive' => true,
        'menu_icon' => 'dashicons-calendar-alt',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
    ]);

    register_post_type('album', [
        'label' => 'Álbumes',
        'labels' => [
            'name' => 'Álbumes',
            'singular_name' => 'Álbum',
            'add_new_item' => 'Añadir nuevo álbum',
        ],
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'album',
        'has_archive' => true,
        'menu_icon' => 'dashicons-format-gallery',
        // Importante: las fotos del álbum se insertan como imágenes dentro
        // del contenido (editor), el sitio las extrae automáticamente de ahí.
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'],
        'taxonomies' => ['category'],
    ]);

    register_post_type('audicion', [
        'label' => 'Audiciones',
        'labels' => [
            'name' => 'Audiciones',
            'singular_name' => 'Audición',
            'add_new_item' => 'Añadir nuevo material de audición',
        ],
        'public' => true,
        'show_in_rest' => true,
        'rest_base' => 'audicion',
        'has_archive' => false,
        'menu_icon' => 'dashicons-media-archive',
        'supports' => ['title', 'custom-fields'],
    ]);
});

// ---------------------------------------------------------------------------
// 2. CAMPOS ACF (equivalentes a crearlos a mano en Custom Fields > Field Groups)
// ---------------------------------------------------------------------------

add_action('acf/init', function () {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    // --- Videos ---------------------------------------------------------
    acf_add_local_field_group([
        'key' => 'group_video_fields',
        'title' => 'Datos del Video',
        'fields' => [
            [
                'key' => 'field_video_youtube_url',
                'label' => 'URL de YouTube',
                'name' => 'youtube_url',
                'type' => 'url',
                'required' => 1,
            ],
            [
                'key' => 'field_video_thumbnail',
                'label' => 'Miniatura (opcional)',
                'name' => 'video_thumbnail',
                'type' => 'image',
                'return_format' => 'url',
                'required' => 0,
            ],
            [
                'key' => 'field_video_description',
                'label' => 'Descripción',
                'name' => 'video_description',
                'type' => 'textarea',
                'required' => 0,
            ],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'video']]],
        'show_in_rest' => 1,
    ]);

    // --- Eventos ---------------------------------------------------------
    acf_add_local_field_group([
        'key' => 'group_evento_fields',
        'title' => 'Datos del Evento',
        'fields' => [
            [
                'key' => 'field_evento_date',
                'label' => 'Fecha',
                'name' => 'event_date',
                'type' => 'date_picker',
                'display_format' => 'd/m/Y',
                'return_format' => 'Ymd',
                'required' => 1,
            ],
            [
                'key' => 'field_evento_time',
                'label' => 'Hora',
                'name' => 'event_time',
                'type' => 'time_picker',
                'display_format' => 'g:i a',
                'return_format' => 'H:i:s',
                'required' => 1,
            ],
            [
                'key' => 'field_evento_venue',
                'label' => 'Lugar',
                'name' => 'event_venue',
                'type' => 'text',
                'required' => 1,
            ],
            [
                'key' => 'field_evento_price',
                'label' => 'Precio',
                'name' => 'event_price',
                'type' => 'text',
                'required' => 0,
            ],
            [
                'key' => 'field_evento_description',
                'label' => 'Descripción',
                'name' => 'event_description',
                'type' => 'textarea',
                'required' => 0,
            ],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'evento']]],
        'show_in_rest' => 1,
    ]);

    // --- Álbumes -----------------------------------------------------------
    acf_add_local_field_group([
        'key' => 'group_album_fields',
        'title' => 'Datos del Álbum',
        'fields' => [
            [
                'key' => 'field_album_date_taken',
                'label' => 'Fecha de las fotos',
                'name' => 'date_taken',
                'type' => 'date_picker',
                'display_format' => 'd/m/Y',
                'return_format' => 'd/m/Y',
                'required' => 0,
            ],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'album']]],
        'show_in_rest' => 1,
    ]);

    // --- Audiciones --------------------------------------------------------
    acf_add_local_field_group([
        'key' => 'group_audicion_fields',
        'title' => 'Datos de la Audición',
        'fields' => [
            [
                'key' => 'field_audicion_instrument_name',
                'label' => 'Instrumento',
                'name' => 'instrument_name',
                'type' => 'text',
                'instructions' => 'Ej: Contrabajo, Violín, Trompeta...',
                'required' => 1,
            ],
            [
                'key' => 'field_audicion_level_label',
                'label' => 'Nivel',
                'name' => 'level_label',
                'type' => 'text',
                'instructions' => 'Ej: Nivel Fila, Nivel Pasante, Nivel Principal Asistente...',
                'required' => 1,
            ],
            [
                'key' => 'field_audicion_drive_url',
                'label' => 'Link de Google Drive',
                'name' => 'drive_url',
                'type' => 'url',
                'instructions' => 'Link de "Compartir" de Google Drive. El archivo debe estar compartido como "Cualquier persona con el enlace".',
                'required' => 1,
            ],
            [
                'key' => 'field_audicion_sort_order',
                'label' => 'Orden',
                'name' => 'sort_order',
                'type' => 'number',
                'instructions' => 'Opcional: controla el orden dentro del instrumento (menor = primero).',
                'required' => 0,
            ],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'audicion']]],
        'show_in_rest' => 1,
    ]);
});
