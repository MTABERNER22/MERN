import { Form, FloatingLabel } from 'react-bootstrap';

function Input({ label, type = 'text', name, placeholder = '', register }) {
    return (
        <div >
            <FloatingLabel name={name} label={label} className="mb-3">
                <Form.Control type={type} placeholder={placeholder} {...register} />
            </FloatingLabel>
        </div>

    )
};

export default Input;