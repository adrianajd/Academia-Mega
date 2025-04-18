Actividad  11
Adriana Saamay Juarez Dominguez
Fecha: 07-04-2025

Introduccion :Fundamentos del Testing


📌 **Características principales:**  

- Comprender el concepto y la importancia del testing.
- Definición de testing y calidad del software.
- Tipos de errores y defectos.
Objetivo: Verificar que la función calcularPromedio() retorne correctamente el promedio de tres calificaciones entre 0 y 10, y maneje errores adecuadamente.

Escenario de Prueba 1

	- Nombre            :	Promedio válido
	- Entradas          :   8, 9, 10
	- Resultado esperado:   9
	- Resultado obtenido:   9
	- Estado            :   Éxito

Escenario de Prueba 2

	- Nombre            :	Campo vacío
	- Entradas          :   8, "", 10
	- Resultado esperado:   Error "Todas las notas deben de ser números validos"
	- Resultado obtenido:   Error "Todas las notas deben de ser números validos"
	- Estado            :   Éxito

Escenario de Prueba 3

	- Nombre            :	Nota fuera de rango
	- Entradas          :   8, 15, 10
	- Resultado esperado:   Error "Las notas deben estar entre 0 y 10"
	- Resultado obtenido:   Error "Las notas deben estar entre 0 y 10"
	- Estado            :   Éxito

Escenario de Prueba 4

	- Nombre            :	Promedio válido
	- Entradas          :   7, 3, 2
	- Resultado esperado:   4
	- Resultado obtenido:   4
	- Estado            :   Éxito

Escenario de Prueba 5

	- Nombre            :	Promedio válido
	- Entradas          :   3, 3, 3
	- Resultado esperado:   3
	- Resultado obtenido:   3
	- Estado            :   Éxito

Escenario de Prueba 6

	- Nombre            :	Promedio válido
	- Entradas          :   9, 9, 9
	- Resultado esperado:   9.666666666666666
	- Resultado obtenido:   9.666666666666666
	- Estado            :   Éxito



-----------------------------------------------------------------------------------------------------

Resumen:
	- Total de pruebas  :  6
	- Exitosos          :  6
	- Fallidas  		:  0
	- Observaciones     :  El sistema maneja correctamente errores de validación	





	