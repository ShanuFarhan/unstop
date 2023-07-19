import React, { useState } from 'react'
import "./Banner.css"
import { Form, Button,Modal,Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LuLayoutDashboard } from 'react-icons/lu'
import { FaRegEdit } from 'react-icons/fa'
import { BsQuestionSquare } from 'react-icons/bs'
import { TbStatusChange } from 'react-icons/tb'
import {MdOutlineAssessment} from 'react-icons/md'
import {SlPeople} from 'react-icons/sl'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgGhost} from 'react-icons/cg'
import {AiOutlinePlus} from 'react-icons/ai'
import {TbAdjustmentsShare} from 'react-icons/tb'
import {BsBagCheck} from 'react-icons/bs'
const Banner = () => {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
      setShowForm(true);
    };
  
    const handleCloseForm = () => {
      setShowForm(false);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted');
      setShowForm(false);
    };
    return (
        <div class="dashboard-container">
            
            <div className="app">
             <Modal show={showForm} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Create new assessment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name of asssessment</Form.Label>
              <Form.Control type="text" placeholder="Type Here" />
            </Form.Group>

            <Form.Group controlId="purpose">
              <Form.Label>Purpose of the test is</Form.Label>
              <Form.Control type="text" placeholder="Select" />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" placeholder="Select" rows={3} />
            </Form.Group>

            <Form.Group controlId="skills">
              <Form.Label>Skills</Form.Label>
              <Form.Control type="text" placeholder="Enter your skills" />
            </Form.Group>

            <Form.Group controlId="duration">
              <Form.Label>Duration of assessment</Form.Label>
              <Form.Control type="text" placeholder="HH:MM:SS" />
            </Form.Group>

            <Button className='btns' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      </div>
                <>
            <div class="sidebar">
                <button class="btn sidebar-btn"><LuLayoutDashboard />Dashboard</button>
                <button class="btn sidebar-btn"><FaRegEdit />Assessment</button>
                <button class="btn sidebar-btn"><BsQuestionSquare className='icon' />MyLibrary</button>
                <div className="dotted"></div>
                <button class='btn1 sidebar-btn'>Admin</button>
                <button class='btn sidebar-btn'><TbStatusChange className='icons' />Round Status</button>
            </div>
            <div class="content">
                <Container>
                <div className="contentheader">
                    <button>Assessment</button>
                    <button>My Assessment</button>
                    <hr />
                </div>
                <hr />
                <div className="contentbanner">
                    <h4>Assessments Overview</h4>
                        <div className="banners">
                            <Container>
                                <Row className='row-boxes'>
                                    <Col xs={12} sm={3}>
                                        <div className="box">
                                        <h5>Total Assessment</h5>
                                        <MdOutlineAssessment className='iconss'/>
                                        <p>34</p>
                                        </div>
                    
                                    </Col>
                                    <Col xs={12} sm={3}>
                                        <div className="box">
                                            <h5>Candidates</h5>
                                            <SlPeople className='iconss'/>
                                            
                                            <p>11,145</p>
                                            <p className='fi'>+89</p>
                                            <h6>Total Candidate</h6>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={3}>
                                        <div className="box">
                                        <h5>Candidates Source</h5>
                                        <AiOutlineGlobal className='iconss'/>
                                        <p>11,000</p> 
                                        <p className='fi'>+89</p>
                                        <h6>E-mail</h6>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={3}>
                                        <div className="box ">
                                        <h5>Total Purpose</h5>
                                        <CgGhost className='iconss'/>
                                        <p>11</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                </div>
                <div className="secondcontent">
                    <div className="contentheader1">
                        <h4>My Assessment</h4>
                    </div>
                    <div className="boxes">
                    <Container>
                        <Row className='newbox'>
                        <Col xs={9} sm={3}>
                            <div className="newass">
                            <AiOutlinePlus onClick={handleClick} className='assicon'/>
                            <h5>New Assessment</h5>
                            <p>From here you can add questions of multiple types like MCQs,subjective(text or paragraph)!</p>
                         </div>
                        </Col>
                        <Col xs={9} sm={3}>
                        <div className="mathass">
                            <BsBagCheck className='mathicon'/>
                            <h5>Math Assessment</h5>
                            <div className="pp">
                            <p>Job</p>
                            <p className='fp'>20 July 2023</p>
                        </div>
                        <div className="bottom">
                            <div className="questions">
                                <p>00 Duration</p>
                            </div>
                            <div className="questions">
                                <p>00 Duration</p>
                            </div>
                            <button><TbAdjustmentsShare/> Share</button>
                        </div>
                        </div>
                        </Col>  
                        <Col xs={9} sm={3}>
                        <div className="mathass">
                            <BsBagCheck className='mathicon'/>
                        <h5>Math Assessment</h5>
                        <div className="pp">
                            <p>Job</p>
                            <p className='fp'>20 July 2023</p>
                        </div>
                        <div className="bottom">
                            <div className="questions">
                                <p>00 Duration</p>
                            </div>
                            <div className="questions">
                                <p>00 Duration</p>
                            </div>
                            <button><TbAdjustmentsShare/> Share</button>
                        </div>  
                        </div>
                        </Col>
                        
                        </Row>
                        </Container>
                    </div>
                </div>
            </Container>
            </div>
            </>
            
        </div>
            
    )
}

export default Banner
