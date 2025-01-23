// Оголошуємо об'єкт formData поза функціями
const formData = { email: "", message: "" };
// Обираємо форму та її елементи
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

// Завантажуємо дані з локального сховища, якщо вони існують
document.addEventListener('DOMContentLoaded', () =>
{
    if (localStorage.getItem("feedback-form-state"))
        {
            // Отримуємо дані з localStorage
            const storedData = JSON.parse(localStorage.getItem("feedback-form-state"));
            // Заповнюємо форму та об'єкт з сховища даних даних
            for (const key in storedData)
            {
                const input = form.querySelector(`[name="${key}"]`);
                if (input)
                    {
                        input.value = storedData[key]; // Встановлюємо значення для кожного поля
                        formData[key] = storedData[key]; // Оновлюємо об'єкт formData
                    }
            }
        }
    else {
        // Якщо відсутні дані, залишаємо поля порожніми
        console.log("Дані в локальному сховищі відсутні.");
        }
});

// Оновлюємо об'єкт formData та локальне сховище в ході зміни даних у формі
form.addEventListener("input", function (event) {
    const target = event.target;
    if (target.name) {
        formData[target.name] = target.value.trim();
        // Сохраняем изменения в localStorage
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }    
});

 // Обробка події submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки
    // Перевіряємо, чи всі поля заповнені
    if (!formData.email || !formData.message) {
        console.log("Fill please all fields");
        return;
    }
    // Виводимо об'єкт formData у консоль
    console.log("Submitted Data:", formData);
    // Очищаємо локальне сховище, об'єкт formData і форму
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
});
