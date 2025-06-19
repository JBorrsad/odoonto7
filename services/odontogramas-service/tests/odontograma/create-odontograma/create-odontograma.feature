Feature: Create an odontograma

    Scenario: I can create an odontograma for a paciente
        Given a paciente with ID "123e4567-e89b-12d3-a456-426614174000"
        When I send a request to create an odontograma
        Then I receive my odontograma ID
        And I can find the odontograma by paciente ID

    Scenario Outline: I try to create an odontograma with invalid data
        Given a paciente with ID "<PacienteId>"
        When I send a request to create an odontograma
        Then I receive an error "Bad Request" with status code 400

        Examples:
            | PacienteId |
            |            |
            | invalid-id |
            | 123        | 