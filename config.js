// 1) Pega aquí los datos de tu proyecto Firebase (Configuración del proyecto > Tus apps > Web).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBhHN_Q4wHeGCdQpDeVuVwPxiVXbRygFH8",
  authDomain: "erit-san-miguel.firebaseapp.com",
  projectId: "erit-san-miguel",
  storageBucket: "erit-san-miguel.firebasestorage.app",
  messagingSenderId: "714447315664",
  appId: "1:714447315664:web:3e1031ad8f4aadf290f4d5"
};
// 2) Los usuarios son nombres cortos (supervisora, gestor1, ...). Internamente se guardan como
//    usuario@erit.app. No necesitan ser correos reales.
window.USER_DOMAIN = "erit.app";
// 3) Usuario(s) de la supervisora. Solo ellos ven montos de venta y cargan datos.
//    Debe coincidir con firestore.rules.
window.SUP_EMAILS = ["tello"];
window.STORE_NAME = "Promart San Miguel";