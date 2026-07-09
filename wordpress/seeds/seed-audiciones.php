<?php
/**
 * Script de una sola vez (NO es un plugin, no lo copies a mu-plugins).
 *
 * Recrea, como posts "Audición" con el link de Google Drive vacío,
 * todos los instrumentos/niveles que existían antes como archivos .zip
 * estáticos en public/audiciones/. La Sinfónica solo tiene que entrar a
 * cada post y pegar el link de Drive correspondiente.
 *
 * Cómo correrlo (en Local: click derecho al sitio > "Open Site Shell"):
 *
 *   wp eval-file "C:\Users\jedas\Repos\sinfonicacarabobo\wordpress\seeds\seed-audiciones.php"
 *
 * Es seguro correrlo varias veces: si un post con el mismo título ya
 * existe, lo salta en vez de duplicarlo.
 */

if (!defined('WP_CLI') || !WP_CLI) {
    echo "Este script debe ejecutarse con WP-CLI: wp eval-file seed-audiciones.php\n";
    exit;
}

if (!function_exists('update_field')) {
    WP_CLI::error('ACF no está activo. Activa el plugin "Advanced Custom Fields" antes de correr esto.');
}

// Instrumento => lista de niveles (mismo contenido que tenían los .zip antiguos)
$instrumentos = [
    'Clarinete' => ['Nivel Fila', 'Nivel Pasante', 'Nivel Principal Asistente'],
    'Contrabajo' => ['Nivel Fila', 'Nivel Pasante', 'Nivel Principal'],
    'Corno' => ['Nivel Único'],
    'Flauta' => ['Nivel Único'],
    'Oboe' => ['Nivel Fila', 'Nivel Pasante', 'Nivel Principal Asistente'],
    'Percusión' => ['Nivel Tutti'],
    'Trombón' => ['Nivel Único'],
    'Trompeta' => ['Nivel Fila', 'Nivel Pasante'],
    'Tuba' => ['Nivel Único'],
    'Viola' => ['Nivel Fila', 'Nivel Pasante', 'Nivel Principal Asistente'],
    'Violín' => ['Nivel Fila A', 'Nivel Fila B', 'Nivel Pasante', 'Nivel Principal Asistente'],
    'Violoncello' => ['Nivel Asistente', 'Nivel Fila A', 'Nivel Fila B', 'Nivel Pasante', 'Nivel Principal'],
];

$created = 0;
$skipped = 0;

foreach ($instrumentos as $instrumento => $niveles) {
    foreach ($niveles as $index => $nivel) {
        $title = "{$instrumento} — {$nivel}";

        $existing = get_posts([
            'post_type' => 'audicion',
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
            'post_type' => 'audicion',
            'post_title' => $title,
            'post_status' => 'publish',
        ]);

        if (is_wp_error($post_id)) {
            WP_CLI::warning("Error creando {$title}: " . $post_id->get_error_message());
            continue;
        }

        update_field('instrument_name', $instrumento, $post_id);
        update_field('level_label', $nivel, $post_id);
        update_field('drive_url', '', $post_id);
        update_field('sort_order', $index, $post_id);

        WP_CLI::log("Creado: {$title}");
        $created++;
    }
}

WP_CLI::success("Listo. Creados: {$created}. Omitidos (ya existían): {$skipped}.");
