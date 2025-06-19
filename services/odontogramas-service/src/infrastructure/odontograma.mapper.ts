import { Mapper } from '@odoonto7/shared';
import {
  OdontogramaEntity,
  TipoDentadura,
  CaraDiente,
  Diente,
  EstadoCara,
  Lesion,
  Tratamiento
} from '../domain/odontograma';
import { OdontogramaResponseDto } from '../presentation/dtos/odontograma.response.dto';
import { Injectable } from '@nestjs/common';
import { OdontogramaModel } from './odontograma.schema';

@Injectable()
export class OdontogramaMapper
  implements
    Mapper<OdontogramaEntity, OdontogramaModel, OdontogramaResponseDto>
{
  toPersistence(entity: OdontogramaEntity): OdontogramaModel {
    const copy = entity.getProps();
    const dientesData: any = {};

    copy.dientes.forEach((diente, numero) => {
      const carasData: any = {};

      diente.caras.forEach((estadoCara, cara) => {
        carasData[cara] = {
          lesiones: estadoCara.lesiones.map((lesion) => ({
            id: lesion.id,
            tipo: lesion.tipo,
            descripcion: lesion.descripcion,
            fechaDeteccion: lesion.fechaDeteccion.toISOString(),
          })),
          tratamientos: estadoCara.tratamientos.map((tratamiento) => ({
            id: tratamiento.id,
            tipo: tratamiento.tipo,
            descripcion: tratamiento.descripcion,
            fechaRealizacion: tratamiento.fechaRealizacion.toISOString(),
            completado: tratamiento.completado,
          })),
        };
      });

      dientesData[numero] = {
        numero: diente.numero,
        presente: diente.presente,
        caras: carasData,
      };
    });

    return {
      id: copy.id,
      tipo_dentadura: copy.tipoDentadura,
      dientes_data: dientesData,
      created_at: copy.createdAt,
      updated_at: copy.updatedAt,
    };
  }

  toDomain(record: OdontogramaModel): OdontogramaEntity {
    const dientes = new Map<string, Diente>();

    Object.entries(record.dientes_data).forEach(
      ([numero, dienteData]: [string, any]) => {
        const caras = new Map<CaraDiente, EstadoCara>();

        Object.entries(dienteData.caras).forEach(
          ([cara, caraData]: [string, any]) => {
            const lesiones = caraData.lesiones.map(
              (lesionData: any) =>
                new Lesion({
                  id: lesionData.id,
                  tipo: lesionData.tipo,
                  descripcion: lesionData.descripcion,
                  fechaDeteccion: new Date(lesionData.fechaDeteccion),
                }),
            );

            const tratamientos = caraData.tratamientos.map(
              (tratamientoData: any) =>
                new Tratamiento({
                  id: tratamientoData.id,
                  tipo: tratamientoData.tipo,
                  descripcion: tratamientoData.descripcion,
                  fechaRealizacion: new Date(tratamientoData.fechaRealizacion),
                  completado: tratamientoData.completado,
                }),
            );

            caras.set(
              cara as CaraDiente,
              new EstadoCara({ lesiones, tratamientos }),
            );
          },
        );

        dientes.set(
          numero,
          new Diente({
            numero: dienteData.numero,
            presente: dienteData.presente,
            caras,
          }),
        );
      },
    );

    return new OdontogramaEntity({
      id: record.id,
      props: {
        tipoDentadura: record.tipo_dentadura as TipoDentadura,
        dientes,
      },
      createdAt: record.created_at,
      updatedAt: record.updated_at,
    });
  }

  toResponse(entity: OdontogramaEntity): OdontogramaResponseDto {
    const props = entity.getProps();
    const response = new OdontogramaResponseDto(entity);
    response.tipoDentadura = props.tipoDentadura;

    const dientesData: any = {};
    props.dientes.forEach((diente, numero) => {
      const carasData: any = {};
      diente.caras.forEach((estadoCara, cara) => {
        carasData[cara] = {
          lesiones: estadoCara.lesiones.map((lesion) => ({
            id: lesion.id,
            tipo: lesion.tipo,
            descripcion: lesion.descripcion,
            fechaDeteccion: lesion.fechaDeteccion,
          })),
          tratamientos: estadoCara.tratamientos.map((tratamiento) => ({
            id: tratamiento.id,
            tipo: tratamiento.tipo,
            descripcion: tratamiento.descripcion,
            fechaRealizacion: tratamiento.fechaRealizacion,
            completado: tratamiento.completado,
          })),
        };
      });
      dientesData[numero] = {
        numero: diente.numero,
        presente: diente.presente,
        caras: carasData,
      };
    });

    response.dientes = dientesData;
    return response;
  }
}
