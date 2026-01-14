// 🔥 CONFIGURATION FIREBASE - À REMPLIR AVEC VOS IDENTIFIANTS

// ⚠️ REMPLACEZ LES VALEURS CI-DESSOUS PAR VOS VRAIES VALEURS FIREBASE

const firebaseConfig = {
  apiKey: "VOTRE_API_KEY_ICI",
  authDomain: "VOTRE_AUTH_DOMAIN_ICI",
  projectId: "VOTRE_PROJECT_ID_ICI",
  storageBucket: "VOTRE_STORAGE_BUCKET_ICI",
  messagingSenderId: "VOTRE_MESSAGING_SENDER_ID_ICI",
  appId: "VOTRE_APP_ID_ICI"
};

// ✅ NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Référence à Firestore
const db = firebase.firestore();

// Collection des codes d'accès
const accessCodesCollection = db.collection('access_codes');
