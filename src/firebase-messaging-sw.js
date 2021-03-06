importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyDQYZDQZgkmOgGo26K3WQxFngCRbr8PX1k",
  authDomain: "notification-20626.firebaseapp.com",
  projectId: "notification-20626",
  storageBucket: "notification-20626.appspot.com",
  messagingSenderId: "382020554270",
  appId: "1:382020554270:web:6b92c5d0dbaa663003680f"
});
const messaging = firebase.messaging();