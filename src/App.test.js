import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App'; // Assurez-vous d'importer correctement votre composant App

test('show the login form', () => {
  const { getByLabelText, queryByLabelText } = render(<App />);

  // Vérifie que les champs Email et Mot de passe sont présents
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  const confirmPasswordInput = queryByLabelText('Confirm Password'); // Cela devrait être null initialement

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(confirmPasswordInput).toBeNull();
});

test("show registerForm when we click on 'Je n'ai pas de compte'", () => {
  const { getByText, getByLabelText } = render(<App />);

  // Cliquez sur le texte "Je n'ai pas de compte"
  const jeNaiPasDeCompteText = getByText("Je n'ai pas de compte");
  fireEvent.click(jeNaiPasDeCompteText);

  // Vérifiez que le champ 'Confirm Password' est maintenant présent
  const confirmPasswordInput = getByLabelText('Confirm Password');

  expect(confirmPasswordInput).toBeInTheDocument();
});

test("Go back to the login form when we click on 'J'ai un compte'", () => {
  const { getByText, queryByLabelText } = render(<App />);

  // Cliquez sur le texte "Je n'ai pas de compte" pour montrer le champ 'Confirm Password'
  const jeNaiPasDeCompteText = getByText("Je n'ai pas de compte");
  fireEvent.click(jeNaiPasDeCompteText);

  // Vérifiez que le champ 'Confirm Password' est présent
  const confirmPasswordInput = queryByLabelText('Confirm Password');
  expect(confirmPasswordInput).toBeInTheDocument();

  // Cliquez sur le texte "J'ai un compte" pour revenir à l'état initial
  const jaiUnCompteText = getByText("J'ai un compte");
  fireEvent.click(jaiUnCompteText);

  // Vérifiez que le champ 'Confirm Password' n'est plus présent
  const emailInput = getByLabelText('Email');
  const passwordInput = getByLabelText('Password');
  expect(confirmPasswordInput).not.toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});
