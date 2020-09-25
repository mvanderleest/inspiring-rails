module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'production',
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {
      textColor: {
        'gray-50': '#f9fafb',
      },
      inset: {
        '1/2': '50%',
      }
    },
  },
  variants: {},
  plugins: [],
}
