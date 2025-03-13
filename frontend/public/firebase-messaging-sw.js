/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
importScripts('https://cdn.jsdelivr.net/npm/idb-keyval@6/dist/umd.js');

const firebaseConfig = {
  apiKey: "AIzaSyBnyg4rjjOAsCqDuYYGZQBjp6RYn3DSa7Y",
  authDomain: "temi-wa.firebaseapp.com",
  projectId: "temi-wa",
  storageBucket: "temi-wa.firebasestorage.app",
  messagingSenderId: "356560069025",
  appId: "1:356560069025:web:edf9898fd9d93c9c5d2be0",
  measurementId: "G-RFXH2826HJ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  idbKeyval.set(notificationTitle, notificationOptions.body);
});
