<?php
/**
 * Script de una sola vez (NO es un plugin, no lo copies a mu-plugins).
 *
 * Crea eventos de PRUEBA con fechas, sedes y precios variados, para
 * poder probar los filtros de la página /eventos (fecha desde/hasta,
 * sede, búsqueda por texto, y paginación).
 *
 * Todos los títulos empiezan con "[PRUEBA]" para poder identificarlos
 * y borrarlos en bloque fácilmente desde el admin cuando termines de
 * probar (Eventos > selecciona todos los que empiecen con [PRUEBA] >
 * Mover a la papelera).
 *
 * Cómo correrlo (en Local: click derecho al sitio > "Open Site Shell"):
 *
 *   wp eval-file "C:\Users\jedas\Repos\sinfonicacarabobo\wordpress\seeds\seed-eventos-prueba.php"
 *
 * Es seguro correrlo varias veces: si un evento con el mismo título ya
 * existe, lo salta en vez de duplicarlo.
 */

if (!defined('WP_CLI') || !WP_CLI) {
    echo "Este script debe ejecutarse con WP-CLI: wp eval-file seed-eventos-prueba.php\n";
    exit;
}

if (!function_exists('update_field')) {
    WP_CLI::error('ACF no está activo. Activa el plugin "Advanced Custom Fields" antes de correr esto.');
}

// title, fecha (Ymd), hora (H:i:s), sede, precio, descripción
$eventos = [
    ['[PRUEBA] Serenata de Aniversario',        '20260718', '20:00:00', 'Teatro Municipal',      'Bs. 70',    'Concierto especial por el aniversario de la orquesta.'],
    ['[PRUEBA] Homenaje a Beethoven',           '20260725', '18:30:00', 'UJAP',                  'Gratuito',  'Un recorrido por las sinfonías más emblemáticas de Beethoven.'],
    ['[PRUEBA] Concierto de Gala',              '20260815', '19:00:00', 'Teatro Municipal',      'Bs. 50',    'Gala de apertura de temporada con solistas invitados.'],
    ['[PRUEBA] Recital de Cámara',              '20260820', '18:00:00', 'UJAP',                  'Gratuito',  'Repertorio de música de cámara interpretado por músicos de la orquesta.'],
    ['[PRUEBA] Concierto al Aire Libre',        '20260830', '16:00:00', 'Plaza Bolívar',         'Gratuito',  'Concierto gratuito al aire libre para toda la familia.'],
    ['[PRUEBA] Concierto Didáctico',            '20260905', '10:00:00', 'Ateneo de Valencia',    'Gratuito',  'Concierto pensado para acercar la música clásica a los más jóvenes.'],
    ['[PRUEBA] Noche Sinfónica',                '20260920', '20:00:00', 'Teatro Municipal',      'Bs. 80',    'Una noche de grandes obras sinfónicas.'],
    ['[PRUEBA] Festival de Jóvenes Talentos',   '20261001', '17:00:00', 'Sala Ríos Reyna',       'Bs. 30',    'Presentación de los jóvenes talentos de la academia.'],
    ['[PRUEBA] Gala Puccini',                   '20261110', '19:00:00', 'Ateneo de Valencia',    'Bs. 45',    'Selección de las mejores arias de Puccini.'],
    ['[PRUEBA] Concierto de Navidad',           '20261215', '19:30:00', 'Teatro Municipal',      'Bs. 60',    'Concierto navideño con villancicos y clásicos de la época.'],
];

$created = 0;
$skipped = 0;

foreach ($eventos as [$title, $fecha, $hora, $sede, $precio, $descripcion]) {
    $existing = get_posts([
        'post_type' => 'evento',
        'title' => $title,
        'post_status' => 'any',
        'posts_per_page' => 1,
        'fields' => 'ids',
    ]);

    if (!empty($existing)) {
        WP_CLI::log("Ya existe, se omite: {$title}");
        $skipped++;
        continue;
    }

    $post_id = wp_insert_post([
        'post_type' => 'evento',
        'post_title' => $title,
        'post_status' => 'publish',
    ]);

    if (is_wp_error($post_id)) {
        WP_CLI::warning("Error creando {$title}: " . $post_id->get_error_message());
        continue;
    }

    update_field('event_date', $fecha, $post_id);
    update_field('event_time', $hora, $post_id);
    update_field('event_venue', $sede, $post_id);
    update_field('event_price', $precio, $post_id);
    update_field('event_description', $descripcion, $post_id);

    WP_CLI::log("Creado: {$title}");
    $created++;
}

WP_CLI::success("Listo. Creados: {$created}. Omitidos (ya existían): {$skipped}.");
