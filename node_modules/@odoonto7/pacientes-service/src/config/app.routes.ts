export const routesV1 = {
  version: 'v1',
  pacientes: {
    root: 'pacientes',
    findAll: '',
    create: '',
    update: ':id',
    delete: ':id',
    updateAddress: ':id/address',
    updateContacto: ':id/contacto',
    updateDatos: ':id/datos',
    updateAlergias: ':id/alergias',
    updateNotas: ':id/notas',
    updateMedicacion: ':id/medicacion',
    updatePatologias: ':id/patologias',
    updateEmbarazada: ':id/embarazada',
    updateHemorragias: ':id/hemorragias'
  }
}; 
