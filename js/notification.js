/*!
    jQuery Custom Scripts
    Copyright (c) 2019 Ramil Zaitov (ramesses.kz)
    Version: 1.0.0
*/

$(document).ready(function() {
	var password = localStorage.getItem('password');
	if (password != null) {
		sendNotification("Восстановление пароля!", {
			body: "Ваш пароль: " + password,
			icon: "../favicon.ico",
			dir: "auto"
		});
	}
});

function sendNotification(title, options) {
	if (Notification.permission === "granted") {
		var notification = new Notification(title, options);
	} else if (Notification.permission !== "denied") {
		Notification.requestPermission(function (permission) {
			if (permission === "granted") {
				var notification = new Notification(title, options);
			}
		});
	} else {
		alert("Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.");
	}
}