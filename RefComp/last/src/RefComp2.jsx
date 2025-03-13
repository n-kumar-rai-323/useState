import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from "react";
const RefComp2 = () => {

    console.log("Hello Ref2");
    const formRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        const rawFormData = formRef.current;
        const formData = new FormData(rawFormData);
        console.log({ formData });
        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
    }
    return (
        <>
            <div>



                <Form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary">Submit</Button>
                </Form>


            </div>
        </>
    )
}

export default RefComp2;