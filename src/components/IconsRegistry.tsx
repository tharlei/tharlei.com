
import { registerTechIcon, TechIconConfig } from './TechIcon';

/**
 * Helper function to register custom tech icons in one place
 * Import and call this function early in your application
 */
export function registerCustomTechIcons() {
  // Example of adding a custom tech icon for Flutter
  const flutterIcon: TechIconConfig = {
    name: 'Flutter',
    svgPath: `<path d="m14.597 10-3.35 3.35L9.5 11.5" />
              <path d="M14.527 3.961 5.5 13l3.5 3.5-7 7H9l11.5-11.5L14 5.5l3.527-3.039a1.5 1.5 0 0 0-3 1.5Z" />
              <path d="m19 6-2.5 2.5L19 11l2.5-2.5L19 6Z" />`,
    color: '#02569B',
    viewBox: '0 0 24 24'
  };
  registerTechIcon('flutter', flutterIcon);
  
  // Example of adding a custom tech icon for Python
  const pythonIcon: TechIconConfig = {
    name: 'Python',
    svgPath: `<path d="M11.101 4.76c-.726-.068-1.476-.103-2.131-.103-2.791 0-3.227 1.338-3.227 2.991v2.093h6.641v.84H3.333c-1.654 0-3.102 1.052-3.554 3.051-.523 2.295-.544 3.731 0 6.125.404 1.774 1.369 3.051 3.023 3.051h1.958v-2.752c0-1.992 1.638-3.752 3.554-3.752h6.636c1.58 0 2.847-1.371 2.847-3.042v-5.699c0-1.623-1.3-2.841-2.847-3.117-.98-.176-1.996-.257-2.848-.686zm-1.513 1.771c.681 0 1.236.587 1.236 1.31 0 .721-.556 1.304-1.236 1.304-.683 0-1.236-.583-1.236-1.304 0-.723.554-1.31 1.236-1.31z" />
              <path d="M20.855 8.576v2.674c0 2.071-1.679 3.817-3.554 3.817h-6.636c-1.555 0-2.847 1.406-2.847 3.042v5.699c0 1.623 1.343 2.579 2.847 3.042 1.798.555 3.515.656 5.678 0 1.436-.435 2.847-1.311 2.847-3.042v-2.093h-6.636v-.84h9.983c1.654 0 2.273-1.217 2.847-3.051.595-1.898.57-3.718 0-6.125-.411-1.732-1.196-3.051-2.85-3.051h-1.958l.279-.072zm-3.943 14.546c.683 0 1.236.586 1.236 1.309 0 .722-.554 1.304-1.236 1.304-.681 0-1.236-.582-1.236-1.304 0-.723.556-1.309 1.236-1.309z" />`,
    color: '#3776AB',
    viewBox: '0 0 24 24'
  };
  registerTechIcon('python', pythonIcon);
}
