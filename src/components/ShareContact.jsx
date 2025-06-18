import React, { useState } from 'react';

const ShareContact = () => {
  const [contactData, setContactData] = useState(null);
  const [contactStatus, setContactStatus] = useState('Ожидание контакта...');

  const requestContact = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.requestContact((success, response) => {
        if (success) {
          setContactData(response);
          setContactStatus('Контакт успешно получен');
        } else {
          setContactStatus('Контакт не предоставлен');
        }
      });
    } else {
      setContactStatus('Telegram WebApp не доступен');
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Запрос контакта</h1>
      <button
        onClick={requestContact}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
      >
        Поделиться контактом
      </button>
      <p className="mt-4 text-center text-gray-600">{contactStatus}</p>
      {contactData && (
        <div className="mt-4 w-full text-left">
          <h2 className="text-lg font-semibold mb-2">Полученные данные:</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {contactData.user_id && <li><strong>User ID:</strong> {contactData.user_id}</li>}
            {contactData.first_name && <li><strong>Имя:</strong> {contactData.first_name}</li>}
            {contactData.last_name && <li><strong>Фамилия:</strong> {contactData.last_name}</li>}
            {contactData.phone_number && <li><strong>Телефон:</strong> {contactData.phone_number}</li>}
            {contactData.username && <li><strong>Username:</strong> {contactData.username}</li>}
            {contactData.auth_date && <li><strong>Дата авторизации:</strong> {new Date(contactData.auth_date * 1000).toLocaleString()}</li>}
            {contactData.hash && <li><strong>Хэш:</strong> {contactData.hash}</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShareContact;