import React from 'react' 
  
 // -------------------- IMPORTS DO REACT - BOOTSTRAP --------------------------- // 
  
 import Button from 'react-bootstrap/Button'; 
 import Container from 'react-bootstrap/Container'; 
 import Form from 'react-bootstrap/Form'; 
 import Nav from 'react-bootstrap/Nav'; 
 import Navbar from 'react-bootstrap/Navbar'; 
 import NavDropdown from 'react-bootstrap/NavDropdown'; 
 import 'bootstrap/dist/css/bootstrap.min.css'; 
  
 function NavBar() { 
     function endpoint(e){ 
         return(localStorage.setItem("url", e.target.value)); 
     } 
  
 return ( 
     <> 
         <Navbar bg="light" expand="lg"> 
             <Container fluid > 
               <Navbar.Brand  href="/" className='titulo'>WMSEXPERT</Navbar.Brand> 
               <Navbar.Toggle aria-controls="navbarScroll" /> 
               <Navbar.Collapse id="navbarScroll"> 
  
                 <Nav 
                   className="me-auto my-2 my-lg-0" 
                   style={{ maxHeight: '100px' }} 
                   navbarScroll 
                   > 
                   {/* <Nav.Link href="/contatos">Contatos</Nav.Link>   Se quiser ver a página de Contatos é só descomentar essa linha de código */} 
                   <NavDropdown title="Gráficos" id="navbarScrollingDropdown"> 
                     <NavDropdown title="Colunas"> 
                       <NavDropdown.Item 
                       href="/coluna"> 
                         Coluna  
                       </NavDropdown.Item> 
                       <NavDropdown.Item href="/coluna_2" > 
                         Coluna 2 
                       </NavDropdown.Item> 
                       <NavDropdown.Item href="/coluna_3"> 
                         Coluna 3 
                       </NavDropdown.Item> 
                       <NavDropdown.Item href="/coluna_4"> 
                         Coluna 4 - JSON 
                       </NavDropdown.Item> 
                       <NavDropdown.Item href="/QtdPedido"> 
                         QtdPedido 
                       </NavDropdown.Item> 
                       <NavDropdown.Item href="/SkuHora"> 
                         SkuHora 
                       </NavDropdown.Item> 
                     </NavDropdown> 
                     <NavDropdown.Divider /> 
                     <NavDropdown title="Barras"> 
                       <NavDropdown.Item href="/bar"> 
                         Barra  
                       </NavDropdown.Item> 
                       {/* <NavDropdown.Divider /> */} 
                       <NavDropdown.Item href="/bar_2"> 
                         Barra 2 
                       </NavDropdown.Item> 
                       
                     </NavDropdown> 
                   </NavDropdown> 
                 </Nav> 
  
                 <Form className="d-flex"> 
                   <Form.Control 
                     type="url" 
                     placeholder="Digite a url do EndPoint: " 
                     className="me-2" 
                     aria-label="Search" 
                     onInput={endpoint} 
                     /> 
                     <Button variant="outline-primary" type='submit'>Buscar</Button> 
                 </Form> 
  
               </Navbar.Collapse> 
             </Container> 
         </Navbar> 
     </> 
 ) 
 } 
  
 export default NavBar