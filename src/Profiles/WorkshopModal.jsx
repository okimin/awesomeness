import React from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

const WorkshopModal = ({ showModal, onHide }) => {
	return (
		<Modal
			show={showModal}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Create Workshop
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label>Name of Workshop</Form.Label>
						<Form.Control placeholder="Mark Jacobs" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Workshop summary</Form.Label>
						<Form.Control
							style={{ marginLeft: '10px' }}
							as="textarea"
							rows="3"
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Address</Form.Label>
						<Form.Control placeholder="123 Address St" />
						<Row>
							<Col>
								<Form.Control placeholder="City" />
							</Col>
							<Col>
								<Form.Control placeholder="State" />
							</Col>
						</Row>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default WorkshopModal;
