import { Mapper } from '@odoonto7/shared';
import { PacienteModel } from './paciente.repository';
import { PacienteEntity } from '../../domain/paciente';
import { PacienteResponseDto } from '../../presentation/http/dtos/paciente.response.dto';
export declare class PacienteMapper implements Mapper<PacienteEntity, PacienteModel, PacienteResponseDto> {
    toPersistence(entity: PacienteEntity): PacienteModel;
    toDomain(record: PacienteModel): PacienteEntity;
    toResponse(entity: PacienteEntity): PacienteResponseDto;
}
