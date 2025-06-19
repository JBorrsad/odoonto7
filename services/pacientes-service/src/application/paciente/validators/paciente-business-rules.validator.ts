import { Injectable } from '@nestjs/common';
import { CreatePacienteCommand } from '../commands/create-paciente/create-paciente.command';
import { UpdatePacienteEmbarazadaCommand } from '../commands/update-paciente-embarazada/update-paciente-embarazada.command';
import { Sexo } from '../../../domain/paciente';

@Injectable()
export class PacienteBusinessRulesValidator {
  
  validateCreatePaciente(command: CreatePacienteCommand): void {
    this.validatePregnancyRule(command.sexo, command.embarazada);
    this.validateAge(command.edad);
    this.validateEmail(command.email);
  }

  validateUpdateEmbarazada(command: UpdatePacienteEmbarazadaCommand, pacienteSexo: Sexo): void {
    this.validatePregnancyRule(pacienteSexo, command.embarazada);
  }

  private validatePregnancyRule(sexo: Sexo, embarazada?: boolean): void {
    if (embarazada === true && sexo !== Sexo.MUJER) {
      throw new Error('Solo las pacientes femeninas pueden estar embarazadas');
    }
  }

  private validateAge(edad: number): void {
    if (edad < 0 || edad > 150) {
      throw new Error('La edad debe estar entre 0 y 150 años');
    }
  }

  private validateEmail(email?: string): void {
    if (email && !this.isValidEmail(email)) {
      throw new Error('El formato del email no es válido');
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
} 