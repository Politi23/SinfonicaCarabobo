/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Colores principales
                primary: '#D19D2E',        // Dorado principal - Acentos principales
                'primary-dark': '#A77E25', // Dorado oscuro - Hover y variantes
                'primary-light': '#DAB158', // Dorado claro - Variantes suaves

                secondary: '#800020',      // Borgoña - Acentos secundarios
                'secondary-light': '#9A0026', // Borgoña claro - Hover y variantes
                'secondary-dark': '#5A0016',  // Borgoña oscuro - Variantes oscuras

                // Colores de fondo
                'background-dark': '#000000',    // Negro puro - Fondo principal
                'surface-dark': '#1a1a1a',       // Gris oscuro - Superficies secundarias
                'background-light': '#FFFFFF',   // Blanco puro - Fondo secciones claras
                'surface-light': '#F9FAFB',      // Gris muy claro - Fondo alternativo (bg-gray-50)

                // Colores de texto
                'text-dark': '#181711',      // Marrón oscuro - Texto en fondos claros
                'text-light': '#FFFFFF',     // Blanco - Texto en fondos oscuros
                'text-muted': '#6b6b6b',     // Gris claro - Texto secundario
                'text-secondary': '#E4E2DD', // Gris claro para dark mode

                // Colores de borde y divisores
                'border-dark': '#4A4A4A',    // Gris oscuro para bordes
                'border-light': '#E5E5E0',   // Gris claro para bordes
                'divider': '#D19D2E',        // Línea divisoria dorada

                // Colores de overlay/gradientes
                'overlay-dark': 'rgba(0, 0, 0, 0.85)',  // Negro semi-transparente
                'overlay-mid': 'rgba(0, 0, 0, 0.40)',   // Negro transparente medio
                'overlay-light': 'rgba(0, 0, 0, 0.70)', // Negro transparente claro

                // Colores para estados
                success: '#10B981',          // Verde para éxitos
                warning: '#F59E0B',          // Naranja para advertencias
                error: '#EF4444',            // Rojo para errores

                // Colores específicos para componentes
                card: {
                    dark: '#1a1a1a',         // Tarjetas en modo oscuro
                }
            },

            fontFamily: {
                serif: ['Merriweather', 'serif'],      // Fuente para textos generales
                display: ['Playfair Display', 'serif'], // Fuente para títulos hero
            },
        },
    },
    plugins: [],
}
