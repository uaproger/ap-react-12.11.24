import fs from 'fs';
import packageJson from './package.json' assert { type: 'json' };

// Функція для підвищення версії
function incrementVersion(version) {
    const parts = version.split('.').map(Number); // Розбиваємо версію на частини
    // Підвищуємо останню частину версії
    if (parts[2] < 9) {
        parts[2] += 1; // Підвищити останню цифру
    } else {
        parts[2] = 0; // Скидаємо останню цифру
        if (parts[1] < 9) {
            parts[1] += 1; // Підвищити середню цифру
        } else {
            parts[1] = 0; // Скидаємо середню цифру
            parts[0] += 1; // Підвищити першу цифру
        }
    }
    return parts.join('.'); // Повертаємо нову версію як рядок
}

const version = packageJson.version;
const newVersion = incrementVersion(version); // Отримуємо нову версію

// Оновлюємо package.json з новою версією
packageJson.version = newVersion;
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 4), 'utf8');
console.log(`Версію ${newVersion} записано у ./package.json`);