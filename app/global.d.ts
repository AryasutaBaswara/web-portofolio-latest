// global.d.ts

// 1. Module Export: Required to ensure the file is treated as a module,
//    which prevents global conflicts with other files.
export {};

// 2. Asset Declarations (Global scope declarations for non-JS file imports)
declare module "*.glb";
declare module "*.png";

// 3. AMBIENT MODULE DECLARATION (Fixes TS7016)
//    This tells TypeScript: "A module named 'three.meshline' exists,
//    don't look for its .d.ts file, just trust it."
declare module "three.meshline";

// 4. R3F TYPES AND IMPORTS
// We must still import Object3DNode to define the JSX tags correctly.
import { Object3DNode } from "@react-three/fiber";

// 5. JSX AUGMENTATION (Fixes original TS2339 JSX error)
//    Since we have no strong types for MeshLine, we use 'any' as a safe fallback.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // MeshLine types (using 'any' because the dedicated @types package doesn't exist)
      meshLine: Object3DNode<any, any>;
      meshLineGeometry: Object3DNode<any, any>;
      meshLineMaterial: Object3DNode<any, any>;
    }
  }
}
