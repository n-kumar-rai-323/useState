import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect, useRef } from "react";
const RefComp = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    return (
        <>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            value={formData?.email} onChange={(e) => {
                                setFormData((prev) => {
                                    return { ...prev, email: e.target.value };
                                });
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            value={formData?.password} onChange={(e) => {
                                setFormData((prev) => {
                                    return { ...prev, password: e.target.value }
                                });
                            }}
                        />
                    </Form.Group>

                    <Button type="reset" variant="primary" onClick={() => setFormData({ email: "", password: "" })}>Reset</Button>
                </Form>
            </div>
        </>
    )
}

export default RefComp;