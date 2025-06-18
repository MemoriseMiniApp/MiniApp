import React, { useState } from 'react';

const ShareContact = () => {
        
            const [contact, setContact] = React.useState(null);

            // Функция для запроса контакта через Telegram Web App
            const requestContact = () => {
                if (window.Telegram && window.Telegram.WebApp) {
                    window.Telegram.WebApp.requestContact((success, contactData) => {
                        if (success && contactData) {
                            setContact(contactData);
                            // Отправляем данные контакта боту
                            window.Telegram.WebApp.sendData(JSON.stringify({
                                action: 'contact_received',
                                contact: contactData
                            }));
                        } else {
                            alert('Контакт не выбран или запрос отклонён');
                        }
                    });
                } else {
                    alert('Это веб-приложение должно быть открыто через Telegram');
                }
            };

            // Формируем текст для отображения данных контакта
            const contactText = contact
                ? `Имя: ${contact.first_name || 'Не указано'}\n` +
                  `Фамилия: ${contact.last_name || 'Не указано'}\n` +
                  `Номер телефона: ${contact.phone_number || 'Не указано'}\n` +
                  `Telegram ID: ${contact.user_id || 'Не указано'}`
                : 'Контакт ещё не выбран';

            return (
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Запрос контакта</h1>
                    <button
                        onClick={requestContact}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
                    >
                        Запросить контакт
                    </button>
                    <div className="bg-gray-100 p-4 rounded">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Данные контакта:</h2>
                        <pre className="text-sm text-gray-600 whitespace-pre-wrap">{contactText}</pre>
                    </div>
                </div>
            );
        }

export default ShareContact;