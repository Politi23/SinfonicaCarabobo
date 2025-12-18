/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            // ============================================
            // 🎨 PALETA DE COLORES OFICIAL DEL SITIO
            // Colores principales y consistentes para todo el sitio
            // ============================================
            colors: {
                // Colores principales
                primary: '#C28F24',        // Dorado principal - Acentos principales
                'primary-dark': '#B07F1F', // Dorado oscuro - Hover y variantes
                'primary-light': '#DDB850', // Dorado claro - Variantes suaves

                secondary: '#82181a',      // Rojo oscuro - Acentos secundarios
                'secondary-light': '#9C1F21', // Rojo claro - Variantes suaves
                'secondary-dark': '#6A1315',  // Rojo más oscuro - Variantes oscuras

                // Colores de fondo
                'background-dark': '#000000',    // Negro puro - Fondo principal
                'surface-dark': '#1a1a1a',       // Gris oscuro - Superficies secundarias
                'background-light': '#FDFBF7',   // Crema claro - Fondo secciones claras
                'surface-light': '#FFFFFF',      // Blanco - Superficies claras

                // Colores de texto
                'text-dark': '#181711',      // Marrón oscuro - Texto en fondos claros
                'text-light': '#FFFFFF',     // Blanco - Texto en fondos oscuros
                'text-muted': '#6b6b6b',     // Gris claro - Texto secundario
                'text-secondary': '#E4E2DD', // Gris claro para dark mode

                // Colores de borde y divisores
                'border-dark': '#4A4A4A',    // Gris oscuro para bordes
                'border-light': '#E5E5E0',   // Gris claro para bordes
                'divider': '#C28F24',        // Línea divisoria dorada

                // Colores de overlay/gradientes
                'overlay-dark': 'rgba(0, 0, 0, 0.85)',  // Negro semi-transparente
                'overlay-mid': 'rgba(0, 0, 0, 0.40)',   // Negro transparente medio
                'overlay-light': 'rgba(0, 0, 0, 0.70)', // Negro transparente claro

                // Colores de acento adicionales
                accent: {
                    yellow: '#DDB850',       // Amarillo/Dorado alternativo
                    gold: '#C28F24',         // Dorado principal
                    'gold-dark': '#B07F1F',  // Dorado oscuro (hover)
                    'gold-light': '#F5E7C1', // Dorado claro
                    red: '#82181a',          // Rojo principal
                    'red-dark': '#6A1315',   // Rojo oscuro
                },

                // Colores para estados
                success: '#10B981',          // Verde para éxitos
                warning: '#F59E0B',          // Naranja para advertencias
                error: '#EF4444',            // Rojo para errores

                // Colores específicos para componentes
                card: {
                    dark: '#1a1a1a',         // Tarjetas en modo oscuro
                }
            },

            // ============================================
            // 📝 TIPOGRAFÍAS
            // ============================================
            fontFamily: {
                serif: ['Merriweather', 'serif'],      // Fuente para textos generales
                display: ['Playfair Display', 'serif'], // Fuente para títulos hero
            },
        },
    },
    plugins: [],
}
