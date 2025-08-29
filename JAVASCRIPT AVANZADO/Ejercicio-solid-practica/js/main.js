/* app.js */

// Interfaces de canales de notificación
class NotificationChannel {
    // Método abstracto para enviar notificaciones
    send(message) {
        throw new Error('Método send() debe ser implementado');
    }
}

class EmailChannel extends NotificationChannel {
    // Implementación para enviar notificación por Email
    send(message) {
        return `Email enviado: ${message}`;
    }
}

class SMSChannel extends NotificationChannel {
    // Implementación para enviar notificación por SMS
    send(message) {
        return `SMS enviado: ${message}`;
    }
}

class PushChannel extends NotificationChannel {
    // Implementación para enviar notificación Push
    send(message) {
        return `Push enviado: ${message}`;
    }
}

// Gestor de notificaciones (Open/Closed y Dependency Inversion)
class NotificationManager {
    // Recibe una lista de canales de notificación
    constructor(channels) {
        this.channels = channels;
    }

    // Envía el mensaje a todos los canales seleccionados
    notify(message) {
        return this.channels.map(channel => channel.send(message));
    }
}

// Lógica de UI
document.getElementById('notificationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío tradicional del formulario
    const message = document.getElementById('message').value; // Obtiene el mensaje del usuario
    const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(input => input.value); // Obtiene los canales seleccionados

    // Instanciar canales seleccionados
    const channels = [];
    if (checked.includes('email')) channels.push(new EmailChannel());
    if (checked.includes('sms')) channels.push(new SMSChannel());
    if (checked.includes('push')) channels.push(new PushChannel());

    // Notificar usando el gestor
    const manager = new NotificationManager(channels);
    const results = manager.notify(message);

    // Mostrar resultados en la interfaz
    document.getElementById('output').innerHTML = results.map(r => `<div>${r}</div>`).join('');
});