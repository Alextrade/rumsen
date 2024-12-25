{
  "compilerOptions": {
    "target": "ES2020", 
    "useDefineForClassFields": true, 
    "lib": ["ES2020", "DOM", "DOM.Iterable"], 
    "module": "ESNext", 
    "skipLibCheck": true, 
    "moduleResolution": "node", 
    "allowImportingTsExtensions": true, 
    "resolveJsonModule": true, 
    "isolatedModules": true, 
    "noEmit": false, 
    "jsx": "react-jsx", 
    "strict": true, 
    "noUnusedLocals": true, 
    "noUnusedParameters": true, 
    "noFallthroughCasesInSwitch": true, 
    "baseUrl": "./", 
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "build"],
  "references": [
    { "path": "./tsconfig.node.json" }
  ]
}
