/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            // ============================================
            // 🎨 PALETA DE COLORES DEL SITIO
            // Edita aquí para cambiar los colores fácilmente
            // ============================================
            colors: {
                // Colores principales
                primary: '#C28F24',        // Dorado - Botón "Apóyanos" y acentos principales
                secondary: '#82181a',      // Rojo oscuro - Acentos secundarios

                // Colores de fondo
                'bg-dark': '#000000ff',      // Negro - Fondo del header
                'bg-body': '#b91616ff',      // Gris muy oscuro - Fondo del body
                'bg-section': '#1a1a1a',   // Gris oscuro - Fondo de secciones

                // Colores de texto
                'text-white': '#ffffff',   // Blanco - Texto principal
                'text-muted': '#e0e0e0',   // Gris claro - Texto secundario/descripción
                'text-title': '#f6e3b5',   // Beige claro - Títulos alternativos

                // Colores de overlay/gradientes
                'overlay-dark': 'rgba(0, 0, 0, 0.85)',  // Negro semi-transparente
                'overlay-mid': 'rgba(0, 0, 0, 0.40)',   // Negro transparente medio
                'overlay-light': 'rgba(0, 0, 0, 0.70)', // Negro transparente claro

                // Colores de acento adicionales
                accent: {
                    yellow: '#DDB850',       // Amarillo/Dorado alternativo
                    gold: '#C28F24',         // Dorado principal
                    'gold-dark': '#B07F1F',  // Dorado oscuro (hover)
                },
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
