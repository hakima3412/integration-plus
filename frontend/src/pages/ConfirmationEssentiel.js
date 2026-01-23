import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ConfirmationEssentiel = () => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [dateExpiration, setDateExpiration] = useState('');

  useEffect(() => {
    generateCode();
  }, []);

  const generateCode = async () => {
    try {
      // Demander l'email au client (normalement reçu de PayPal)
      const urlParams = new URLSearchParams(window.location.search);
      const payerEmail = urlParams.get('payer_email') || prompt('Veuillez entrer votre email:');

      if (!payerEmail) {
        setError('Email requis');
        setLoading(false);
        return;
      }

      const response = await axios.post(`${BACKEND_URL}/api/generate-code`, {
        email: payerEmail,
        formule: 'essentiel'
      });

      setCode(response.data.code);
      setDateExpiration(new Date(response.data.date_expiration).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }));
      setLoading(false);
    } catch (err) {
      console.error('Erreur génération code:', err);
      setError('Erreur lors de la génération du code. Contactez le support.');
      setLoading(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 shadow-2xl">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-center mt-4 text-gray-600">Génération de votre code...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 shadow-2xl max-w-md">
          <div className="text-red-500 text-6xl text-center mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-center mb-4">Erreur</h2>
          <p className="text-center text-gray-600">{error}</p>
          <a
            href="mailto:plumeprestige@outlook.fr"
            className="mt-6 block w-full bg-purple-600 text-white py-3 rounded-lg text-center hover:bg-purple-700 transition"
          >
            Contacter le support
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-2xl w-full">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Paiement confirmé ! 🎉
        </h1>
        <p className="text-center text-gray-600 mb-8">Merci pour votre achat</p>

        {/* Formule Info */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-lg p-4 mb-6 text-center">
          <p className="text-lg font-semibold">🌟 Formule Essentiel - 49€</p>
          <p className="text-sm mt-1">Valide jusqu'au {dateExpiration}</p>
        </div>

        {/* Code Display */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <p className="text-sm text-gray-500 text-center uppercase tracking-wide mb-3">
            Votre code d'accès personnel
          </p>
          <div className="bg-white border-4 border-dashed border-purple-600 rounded-lg p-4 mb-4">
            <p className="text-2xl md:text-3xl font-bold text-purple-600 text-center font-mono tracking-wider">
              {code}
            </p>
          </div>
          <button
            onClick={copyCode}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {copied ? '✓ Code copié !' : '📋 Copier le code'}
          </button>
        </div>

        {/* Instructions */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Comment accéder à votre espace
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-yellow-800">
            <li>Cliquez sur le bouton "Accéder à mon espace" ci-dessous</li>
            <li>Entrez votre code d'accès (ou collez-le avec Ctrl+V)</li>
            <li>Cliquez sur "Accéder"</li>
            <li>Vous êtes dans votre espace membre ! 🎯</li>
          </ol>
        </div>

        {/* Access Button */}
        <a
          href="https://integrationplus.eu/membre/acces.html"
          className="block w-full bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-4 rounded-lg text-center text-lg font-semibold hover:from-purple-700 hover:to-indigo-800 transition transform hover:scale-105"
        >
          → Accéder à mon espace
        </a>

        {/* Support Info */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p className="font-semibold mb-2">✉️ Un email de confirmation vous a été envoyé</p>
          <p className="mb-2">Besoin d'aide ?</p>
          <a href="mailto:plumeprestige@outlook.fr" className="text-purple-600 hover:underline">
            plumeprestige@outlook.fr
          </a>
          <p className="mt-3 text-xs">
            🔒 Votre code est personnel et confidentiel
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationEssentiel;
