module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      backdropBlur: ["hover", "focus"],
    },
  },
  theme: {
    extend: {
      spacing: {
        "cursor-size": "40px",
        "cursor-hover-size": "80px",
      },
      colors: {
        "cursor-base": "rgba(53, 54, 57, 0.1)",
        "cursor-hover": "rgba(255, 165, 0, 0.5)",
        primary: {
          DEFAULT: "var(--color-primary)",
          border: "var(--color-primary-border)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          border: "var(--color-secondary-border)",
          foreground: "var(--secondary-foreground)",
        },
        background: "var(--color-primary)",
        // background: 'hsl(var(--color-primary))',
        foreground: "var(--color-primary)",
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // chart: {
        //   1: "hsl(var(--chart-1))",
        //   2: "hsl(var(--chart-2))",
        //   3: "hsl(var(--chart-3))",
        //   4: "hsl(var(--chart-4))",
        //   5: "hsl(var(--chart-5))",
        // },
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.75, -1, 0.3, 2.33)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        ethnocentric: ['"Ethnocentric-RG"', "sans-serif"], // Custom font family
        // airstrike: ['AirstrikeRegular', 'sans-serif'], // Add custom font family here
      },
      //   borderRadius: {
      //     lg: "var(--radius)",
      //     md: "calc(var(--radius) - 2px)",
      //     sm: "calc(var(--radius) - 4px)",
      //   },
      animation: {
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        zoomIn: "zoomIn 0.5s ease-in-out forwards",
        lineUp: "lineUp 2s ease-out forwards",
        slideReveal: "slideReveal 1s ease-in forwards",
        revealText: "revealText 1.1s ease-in-out forwards",
      },
      blur: {
        "10px": "10px",
      },
      keyframes: {
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        lineUp: {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "20%": { opacity: "0" },
          // "50%": { opacity: "1", transform: "translateY(0%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideReveal: {
          "0%": { transform: "translateX(-90%)" }, // Start at the left
          "60%": { transform: "translateX(0%)" }, // Slide fully across the text
          "100%": { transform: "translateX(200%)" }, // Completely move out of view
        },
        revealText: {
          "0%": { opacity: 0, transform: "scale(0.95)" }, // Text starts hidden and slightly smaller
          "60%": { opacity: 0, transform: "scale(0.95)" }, // Remains hidden while box slides
          "100%": { opacity: 1, transform: "scale(1)" }, // Text becomes fully visible and scales up slightly
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
