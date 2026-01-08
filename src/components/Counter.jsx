import {useState} from 'react'

const Counter = () => {
     const [count, setCount] = useState(0);
     console.log("tentando");


    return (
        <div>
        <p>Você clicou {count} vezes.</p>
        <button onClick={() => setCount(count + 1)}>Aumentar valor</button>
        </div>
    );
};

export default Counter;
