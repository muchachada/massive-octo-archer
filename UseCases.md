Casos de Uso
============

## CUR1

**Alcance**: Desde que el cliente llama o se presenta hasta que se entrega el pedido.

**Evento inicializador**: El cliente llama o se presenta.

**Flujo básico**:

1. Cuando el cliente llamó para solicitar un trabajo, el recepcionista registra el pedido y le da una fecha de entrega y precio.
2. Al comienzo de cada día, se consulta el trabajo más urgente y se realiza. Se marca como finalizado y se notificará al cliente.
3. El cliente retira el trabajo y se registra la entrega.

**Alternativas**:

1. a. El cliente no está registrado en el sistema.

	1. a. 1. Se registra al cliente en el sistema.

## CUU1

**Flujo básico**

1. Cuando el cliente llamó o se presentó para solicitar un trabajo, el recepcionista solicita los datos del cliente y consulta en el sistema.
2. El sistema valida y muestra el perfil del cliente.
3. El recepcionista solicita al cliente detalles del trabajo y los ingresa al sistema bajo un nuevo trabajo.
4. El sistema registra los datos del trabajo.
5. El recepcionista informa al cliente precio y plazo de entrega.

**Alternativas**
1. a. El cliente llama o se presenta y da datos del trabajo sin informar su identidad.

	**Flujo básico para alternativa a.**

	1. El recepcionista ingresa los datos del trabjo bajo un nuevo trabajo en el sistema.
	2. El sistema registra el trabajo.
	3. El recepcionista pide los datos del cliente y consulta en el sistema.
	4. El sistema valida y muestra el perfil del cliente.
	5. El recepcionista confirma el trabajo para ese cliente.
	6. El sistema registra. Continúa con paso 5.

	**Alternativas**

	1.a.4.a El cliente no existe en el sistema.

		1.a.4.a.1 Recepcionista solicita datos de cliente y los ingresa al sistema.

		1.a.4.a.2 Sistema registra cliente. Continúa en paso 1.a.5.
