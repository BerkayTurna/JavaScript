import { useState } from 'react';

function Counter() {
    // useState hook'unu kullanarak bir durum değişkeni oluşturuyoruz
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            {/* Butona tıklandığında count durumunu artıran bir fonksiyon */}
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;