<?php
/**
 * Script de una sola vez (NO es un plugin, no lo copies a mu-plugins).
 *
 * Crea publicaciones de BLOG de prueba (posts nativos de WordPress, sin
 * campos ACF ni custom post type) con categorías y fechas variadas, para
 * poder ver la sección /blog con contenido real y probar filtros,
 * orden y paginación (>6 publicaciones).
 *
 * Todos los títulos empiezan con "[PRUEBA]" para poder identificarlos
 * y borrarlos en bloque cuando termines de probar (Entradas > busca
 * "[PRUEBA]" > selecciona todas > Mover a la papelera).
 *
 * Cómo correrlo (en Local: click derecho al sitio > "Open Site Shell"):
 *
 *   wp eval-file "C:\Users\jedas\Repos\sinfonicacarabobo\wordpress\seeds\seed-blog-prueba.php"
 *
 * Es seguro correrlo varias veces: si un post con el mismo título ya
 * existe, lo salta en vez de duplicarlo.
 */

if (!defined('WP_CLI') || !WP_CLI) {
    echo "Este script debe ejecutarse con WP-CLI: wp eval-file seed-blog-prueba.php\n";
    exit;
}

// title, categoría, fecha (Y-m-d), extracto, contenido
$posts = [
    [
        '[PRUEBA] La Orquesta inicia su temporada 2026',
        'Noticias',
        '2026-06-02',
        'Arrancamos una nueva temporada cargada de conciertos, invitados especiales y estrenos.',
        '<p>La Orquesta Sinfónica de Carabobo da inicio a su temporada 2026 con una agenda que incluye conciertos sinfónicos, recitales de cámara y presentaciones didácticas en distintas sedes de Valencia.</p><p>Durante los próximos meses, el público podrá disfrutar de un repertorio que combina grandes clásicos con obras de compositores venezolanos.</p>',
    ],
    [
        '[PRUEBA] Entrevista con nuestro Director Artístico',
        'Comunidad',
        '2026-06-10',
        'Conversamos con el Maestro José Calabrese sobre sus planes para la orquesta este año.',
        '<p>En esta entrevista, el Director Artístico y Musical de la OSC comparte su visión sobre el crecimiento de la orquesta, el trabajo con jóvenes talentos y los retos de mantener viva la música sinfónica en la región.</p>',
    ],
    [
        '[PRUEBA] Cinco razones para asistir a un concierto sinfónico',
        'Educación',
        '2026-06-15',
        'Si nunca has ido a un concierto en vivo, estas son algunas razones para animarte.',
        '<p>Desde la experiencia sensorial de escuchar una orquesta completa en vivo, hasta el valor cultural de apoyar a los artistas locales, te contamos por qué un concierto sinfónico vale la pena.</p>',
    ],
    [
        '[PRUEBA] Resumen del Festival de Jóvenes Talentos',
        'Conciertos',
        '2026-06-20',
        'Un repaso a las presentaciones más destacadas de nuestros jóvenes músicos.',
        '<p>El Festival de Jóvenes Talentos reunió a decenas de estudiantes de la academia en un concierto que dejó en evidencia el semillero de músicos que tiene la región.</p>',
    ],
    [
        '[PRUEBA] La Sinfónica se une a un proyecto educativo regional',
        'Educación',
        '2026-06-25',
        'Un nuevo convenio busca acercar la música clásica a escuelas públicas de Carabobo.',
        '<p>A través de conciertos didácticos y talleres, la orquesta busca llevar la música sinfónica a estudiantes que no habían tenido contacto previo con este tipo de repertorio.</p>',
    ],
    [
        '[PRUEBA] Bastidores: un día de ensayo con la orquesta',
        'Comunidad',
        '2026-06-30',
        'Te llevamos detrás de cámaras para mostrarte cómo se prepara un concierto.',
        '<p>Desde la afinación de los instrumentos hasta los últimos ajustes del director, un ensayo general es donde realmente cobra forma cada concierto.</p>',
    ],
    [
        '[PRUEBA] Anunciamos nuestra gala de fin de año',
        'Noticias',
        '2026-07-02',
        'La gala anual reunirá a solistas invitados y a toda la orquesta en una sola noche.',
        '<p>Con un programa que incluye obras sinfónicas y corales, la gala de fin de año se perfila como uno de los eventos más esperados de la temporada.</p>',
    ],
    [
        '[PRUEBA] Historia del Teatro Municipal de Valencia',
        'Educación',
        '2026-07-04',
        'Un recorrido por la historia del recinto que ha sido sede de tantos de nuestros conciertos.',
        '<p>El Teatro Municipal de Valencia ha sido testigo de décadas de actividad cultural en la ciudad, y sigue siendo uno de los escenarios predilectos de la orquesta.</p>',
    ],
    [
        '[PRUEBA] Nuevos músicos se incorporan a la orquesta',
        'Noticias',
        '2026-07-06',
        'Tras un proceso de audiciones, damos la bienvenida a nuevos integrantes de la fila de cuerdas.',
        '<p>Luego de varias rondas de audición, la orquesta suma nuevos talentos a su sección de cuerdas, fortaleciendo así su sonido de cara a la nueva temporada.</p>',
    ],
    [
        '[PRUEBA] Cómo prepararse para una audición orquestal',
        'Educación',
        '2026-07-08',
        'Consejos prácticos para quienes están considerando presentarse a una audición.',
        '<p>Desde cómo abordar el repertorio exigido hasta recomendaciones para manejar los nervios el día de la audición, aquí compartimos algunos consejos útiles para aspirantes.</p>',
    ],
];

$created = 0;
$skipped = 0;

foreach ($posts as [$title, $categoria, $fecha, $excerpt, $content]) {
    $existing = get_posts([
        'post_type' => 'post',
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
        'post_type' => 'post',
        'post_title' => $title,
        'post_excerpt' => $excerpt,
        'post_content' => $content,
        'post_status' => 'publish',
        'post_date' => $fecha . ' 09:00:00',
    ]);

    if (is_wp_error($post_id)) {
        WP_CLI::warning("Error creando {$title}: " . $post_id->get_error_message());
        continue;
    }

    wp_set_post_terms($post_id, [$categoria], 'category');

    WP_CLI::log("Creado: {$title} ({$categoria})");
    $created++;
}

WP_CLI::success("Listo. Creados: {$created}. Omitidos (ya existían): {$skipped}.");
