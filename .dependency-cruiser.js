/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    /* **************************************************
     * 🚫 DEPENDENCIAS CIRCULARES
     * **************************************************/
    
    {
      name: 'no-circular',
      comment: 'Circular dependencies are not allowed',
      severity: 'error',
      from: {},
      to: {
        circular: true
      }
    },

    /* **************************************************
     * 🔄 MICROSERVICIOS - AISLAMIENTO
     * **************************************************/
    
    {
      name: 'no-cross-service-deps',
      comment: 'Services cannot import from other services',
      severity: 'error',
      from: { 
        path: '^services/pacientes-service/'
      },
      to: { 
        path: '^services/odontogramas-service/'
      }
    },
    
    {
      name: 'no-cross-service-deps-reverse',
      comment: 'Services cannot import from other services',
      severity: 'error',
      from: { 
        path: '^services/odontogramas-service/'
      },
      to: { 
        path: '^services/pacientes-service/'
      }
    },

    /* **************************************************
     * 📚 SHARED LIBRARY - PUREZA
     * **************************************************/
    
    {
      name: 'no-shared-deps-services',
      comment: 'Shared library cannot depend on service-specific code',
      severity: 'error',
      from: { 
        path: '^libs/shared/'
      },
      to: { 
        path: '^services/'
      }
    },

    /* **************************************************
     * 🏛️ ARQUITECTURA DDD - REGLAS DE CAPAS (Simplificadas)
     * **************************************************/
    
    {
      name: 'no-domain-deps-infrastructure',
      comment: 'Domain layer cannot depend on Infrastructure layer',
      severity: 'error',
      from: { 
        path: 'domain/'
      },
      to: { 
        path: 'infrastructure/'
      }
    },
    
    {
      name: 'no-domain-deps-presentation',
      comment: 'Domain layer cannot depend on Presentation layer',
      severity: 'error',
      from: { 
        path: 'domain/'
      },
      to: { 
        path: 'presentation/'
      }
    },
    
    {
      name: 'no-domain-deps-application',
      comment: 'Domain layer cannot depend on Application layer',
      severity: 'error',
      from: { 
        path: 'domain/'
      },
      to: { 
        path: 'application/'
      }
    },

    {
      name: 'no-application-deps-presentation', 
      comment: 'Application layer cannot depend on Presentation layer',
      severity: 'error',
      from: { 
        path: 'application/'
      },
      to: { 
        path: 'presentation/'
      }
    },

    /* **************************************************
     * 📁 ESTRUCTURA DE ARCHIVOS
     * **************************************************/
    
    {
      name: 'no-domain-driven-hexagon-deps',
      comment: 'Project code cannot depend on example repository',
      severity: 'warn',
      from: { 
        path: '^(services|libs)'
      },
      to: { 
        path: '^domain-driven-hexagon/'
      }
    }
  ],

  options: {
    /* exclude commonly ignored folders and files */
    exclude: {
      path: [
        'node_modules',
        'dist',
        'coverage',
        '\\.git',
        '\\.vscode',
        'domain-driven-hexagon/node_modules',
        'domain-driven-hexagon/dist',
        '\\.js$',
        '\\.d\\.ts$'
      ]
    },

    /* TypeScript and module resolution options */
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: 'tsconfig.json'
    },

    /* Performance and output options */
    progress: {
      type: 'cli-feedback'
    },

    /* Include only our services and libs */
    includeOnly: '^(services|libs)/'
  }
}; 