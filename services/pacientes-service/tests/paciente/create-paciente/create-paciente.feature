Feature: Create a paciente

    Scenario: I can create a paciente
        Given paciente profile data
            | nombre    | apellido | fechaNacimiento | telefono    | email                  | genero    | estadoCivil | ocupacion |
            | Juan      | Pérez    | 1990-05-15      | 1234567890  | juan.perez@gmail.com   | masculino | soltero     | ingeniero |
        When I send a request to create a paciente
        Then I receive my paciente ID
        And I can see my paciente in a list of all pacientes

    Scenario Outline: I try to create a paciente with invalid data
        Given paciente profile data
            | nombre    | apellido   | fechaNacimiento   | telefono    | email     | genero     | estadoCivil   | ocupacion   |
            | <Nombre>  | <Apellido> | <FechaNacimiento> | <Telefono>  | <Email>   | <Genero>   | <EstadoCivil> | <Ocupacion> |
        When I send a request to create a paciente
        Then I receive an error "Bad Request" with status code 400

        Examples:
            | Nombre | Apellido | FechaNacimiento | Telefono | Email              | Genero    | EstadoCivil | Ocupacion |
            |        | Pérez    | 1990-05-15      | 12345    | juan@gmail.com     | masculino | soltero     | ingeniero |
            | Juan   |          | 1990-05-15      | 12345    | juan@gmail.com     | masculino | soltero     | ingeniero |
            | Juan   | Pérez    |                 | 12345    | juan@gmail.com     | masculino | soltero     | ingeniero |
            | Juan   | Pérez    | 1990-05-15      |          | juan@gmail.com     | masculino | soltero     | ingeniero |
            | Juan   | Pérez    | 1990-05-15      | 12345    | invalid-email      | masculino | soltero     | ingeniero | 